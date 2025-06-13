import { Injectable } from '@nestjs/common';

import { ImportConnector } from './ext.api/connector/import.connector';
import { Ability } from './shared/model/models';

@Injectable()
export class AppService {

  constructor(
    private readonly importConnector: ImportConnector,
  ) { }

  fakeCreate(data: any[]): any[] {
    const fakeData: any[] = []
    for (let i = 0; i < data.length; i++) {
      fakeData.push({
        ...data[i],
        id: i,
      })
    }
    return fakeData;
  }

  async getHello(): Promise<any> {
    let data: any[] = [];

    data.push(this.fakeCreate(await this.importConnector.getAlignments()));
    data.push(this.fakeCreate(await this.importConnector.getLanguages()));
    data.push(this.fakeCreate(await this.importConnector.getAbilities()));
    data.push(this.fakeCreate(await this.importConnector.getSkills(data[2])));
    data.push(this.fakeCreate(await this.importConnector.getBackgrounds(data[2], data[1], data[3])));
    data.push(this.fakeCreate(await this.importConnector.getRaces()));
    data[5] = await this.importConnector.setSubRaces(data[5]);

    return data;
  }
}
