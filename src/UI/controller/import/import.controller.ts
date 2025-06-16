import { Controller, Get } from '@nestjs/common';
import { ImportService } from '@app/core/services/import/import.service';

@Controller('import')
export class ImportController {
    constructor(private readonly svc: ImportService) { }

    @Get()
    import() {
        return this.svc.importData();
    }
}
