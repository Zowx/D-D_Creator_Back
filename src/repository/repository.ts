import { RaceCandidate } from '@app/core/models/race.model';

export { AbilitiesRepository } from '@repository/abilities.repository';
export { AlignmentsRepository } from '@repository/alignments.repository';
export { LanguagesRepository } from '@repository/languages.repository';
export { SkillRepository } from '@repository/skill.repository';
export { BackgroundsRepository } from '@repository/backgrounds.repository';

export class RacesRepository {
  findAll(){return [] as any[];}
  findById(id: bigint) {return null as any;}
  create(candidate: RaceCandidate) {return null as any;}
  update(data) {return null as any;}
  delete(id: bigint) {return null as any;}
}