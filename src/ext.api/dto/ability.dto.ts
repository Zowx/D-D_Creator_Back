// Importation de l'interface modèle
import { Ability } from '@app/shared/models/models';
import { SkillDto } from './skill.dto';

/**
 * Représente un Data Transfer Object (DTO) pour l'entité Ability.
 * Utilisé pour transférer les données de manière sécurisée entre les couches de l'application.
 */
export class AbilityDto {
  id: bigint;
  name: string;
  description: string;
  shortDescription: string;
  skillsId?: SkillDto[];
  url: string;

    /**
   * Crée une nouvelle instance de AbilityDto.
   *
   * @param {Object} init - Données pour initialiser les propriétés du DTO. Les données doivent être de la forme suivante :
   * {
   *  id: bigint;
   *  name: string;
   *  description: string;
   *  shortDescription: string;
   * }
   */
  constructor(data?: Partial<AbilityDto>) {
    Object.assign(this, data);
  }

  /**
   * Convertit le DTO en modèle Ability.
   * 
   * @returns Ability - Nouvelle instance du modèle.
   */
  toModel(): Ability {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      shortDescription: this.shortDescription,
    };
  }

  /**
   * Crée un DTO à partir des données d'une requête.
   * 
   * @param {any} req - Données de la requête à convertir.
   * @returns AbilityDto - Nouvelle instance du DTO.
   */
  static fromRequest(req: any): AbilityDto {
    return new AbilityDto({
      id: req.id,
      name: req.name,
      description: req.desc,
      shortDescription: req.short_desc,
      skillsId: req.skills ? req.skills.map((skill: any) => SkillDto.fromRequest(skill)) : [],
      url: req.url,
    });
  }
}
