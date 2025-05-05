  import { Controller, Post, Body, Res, Get } from '@nestjs/common';
  import { Response } from 'express';
  import { PdfService } from './pdf/pdf.service';
  import { PdfDto } from './pdf/dto/pdf.dto';
  
  @Controller('character-sheet')
  export class PdfController {
    constructor(private readonly sheetService: PdfService) {}
  
    @Post('fill')
    async fill(
      @Body() dto: PdfDto,
      @Res() res: Response,
    ) {
      const pdfBuffer = await this.sheetService.fillForm(dto);
      res
        .set({
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename=filled_character_sheet.pdf',
        })
        .send(pdfBuffer);
    }
    /*@Get('fields')
    async fields() {
      return this.sheetService.listFields();
    }*/
  }
  