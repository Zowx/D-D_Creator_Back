import { Injectable } from '@nestjs/common';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PdfService {
  async fillForm(data: Record<string, any>): Promise<Buffer> {
    try {
      const pdfPath = "./dnd.pdf"; // Chemin vers le modèle PDF
      const pdfBytes = fs.readFileSync(pdfPath);

      const pdfDoc = await PDFDocument.load(pdfBytes);
      const form = pdfDoc.getForm();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

      const fields = form.getFields();

      for (const field of fields) {
        const name = field.getName();
        const value = data[name];

        if (value !== undefined) {
          try {
            form.getTextField(name).setText(String(value));
            form.getTextField(name).updateAppearances(font);
          } catch {
            try {
              form.getCheckBox(name).check();
            } catch {
              // champ non reconnu, on ignore
            }
          }
        }
      }

      const filledPdfBytes = await pdfDoc.save();
      return Buffer.from(filledPdfBytes);
    } catch (err) {
      console.error('Erreur lors du remplissage de la fiche :', err);
      throw new Error('Impossible de générer le PDF');
    }
  }
}
