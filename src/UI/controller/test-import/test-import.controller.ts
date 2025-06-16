import { Controller, Get } from '@nestjs/common';
import { ImportService } from '@app/core/services/import/import.service';

@Controller('test-import')
export class TestImportController {
  constructor(private readonly importService: ImportService) {}

  @Get('duplicates')
  async testDuplicates() {
    console.log('🧪 Testing duplicate management...');

    try {
      // First import - should create entries
      console.log('🔄 First import attempt...');
      const firstImport = await this.importService.importAllData();

      // Second import - should skip duplicates
      console.log('🔄 Second import attempt (should skip duplicates)...');
      const secondImport = await this.importService.importAllData();

      return {
        message: 'Duplicate test completed successfully',
        firstImportCount: {
          alignments: firstImport[0]?.length || 0,
          abilities: firstImport[1]?.length || 0,
          classes: firstImport[2]?.length || 0,
          races: firstImport[3]?.length || 0,
        },
        secondImportCount: {
          alignments: secondImport[0]?.length || 0,
          abilities: secondImport[1]?.length || 0,
          classes: secondImport[2]?.length || 0,
          races: secondImport[3]?.length || 0,
        },
      };
    } catch (error) {
      console.error('❌ Error during duplicate test:', error);
      throw error;
    }
  }

  @Get('class/:name')
  async testSingleClassImport() {
    console.log('🧪 Testing single class import with duplicates...');

    try {
      // First import - should create
      const firstImport = await this.importService.importClassByName('Fighter');
      console.log('First import result:', firstImport);

      // Second import - should return existing
      const secondImport =
        await this.importService.importClassByName('Fighter');
      console.log('Second import result:', secondImport);

      return {
        message: 'Single class duplicate test completed',
        firstImport,
        secondImport,
        sameInstance: firstImport?.id === secondImport?.id,
      };
    } catch (error) {
      console.error('❌ Error during single class test:', error);
      throw error;
    }
  }
}
