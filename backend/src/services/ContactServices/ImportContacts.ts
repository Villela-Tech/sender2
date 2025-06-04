import { head } from "lodash";
import { Readable } from "stream";
import csv from "csv-parse";
import Contact from "../../models/Contact";
import CheckContactNumber from "../WbotServices/CheckNumber";
import { logger } from "../../utils/logger";

export async function ImportContacts(
  companyId: number,
  file: Express.Multer.File | undefined
) {
  const contactList: Contact[] = [];
  const readableFile = new Readable();
  readableFile.push(file?.buffer);
  readableFile.push(null);

  const parseFile = readableFile.pipe(csv({
    delimiter: ";",
    columns: true,
    skip_empty_lines: true
  }));

  for await (const record of parseFile) {
    if (!record.name || !record.number) continue;

    const [newContact, created] = await Contact.findOrCreate({
      where: {
        number: record.number.replace(/\D/g, ""),
        companyId
      },
      defaults: {
        name: record.name,
        number: record.number.replace(/\D/g, ""),
        email: record.email || "",
        companyId
      }
    });

    if (created) {
      try {
        const response = await CheckContactNumber(newContact.number, companyId);
        const number = response.jid.replace(/\D/g, "");
        newContact.number = number;
        await newContact.save();
        contactList.push(newContact);
      } catch (e) {
        logger.error(`Número de contato inválido: ${newContact.number}`);
      }
    }
  }

  return contactList;
}
