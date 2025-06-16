// Importation de l'interface modèle
import { Skill } from '@core/models/skill.model';
import { AbilityDto } from './ability.dto';

/**
 * Représente un Data Transfer Object (DTO) pour l'entité Skill.
 * Utilisé pour transférer les données de manière sécurisée entre les couches de l'application.
 */
export class SkillDto {
  id: bigint;
  name: string;
  description: string;
  abilityId?: bigint;

  /**
 * Crée une nouvelle instance de SkillDto.
 *
 * @param {Object} init - Données pour initialiser les propriétés du DTO. Les données doivent être de la forme suivante :
 * {
 *  id: number;
 *  name: string;
 *  description: string;
 *  abilityid: AbilityDto;
 * }
 */
  constructor(data?: Partial<SkillDto>) {
    Object.assign(this, data);
  }


  /**
   * Convertit le DTO en modèle Skill.
   * 
   * @returns Skill - Nouvelle instance du modèle.
   */
  toModel(): Skill {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      abilityId: this.abilityId!,
    };
  }

  /**
   * Crée un DTO à partir des données d'une requête.
   * 
   * @param {any} req - Données de la requête à convertir.
   * @returns SkillDto - Nouvelle instance du DTO.
   */
  static fromRequest(req: any): SkillDto {
    return new SkillDto({
      id: req.id,
      name: req.name,
      description: req.desc,
    });
  }
}
