import {
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { PdfService } from './pdf.service';

@Controller('sheet')
export class PdfController {
  constructor(private readonly sheetService: PdfService) {}

  @Post('generate')
  async generateSheet(@Body() body: Record<string, any>, @Res() res: Response) {
    try {
      const pdfBuffer = await this.sheetService.fillForm(body);
      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="character-sheet.pdf"',
      });
      res.send(pdfBuffer);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Erreur lors du remplissage de la fiche.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
