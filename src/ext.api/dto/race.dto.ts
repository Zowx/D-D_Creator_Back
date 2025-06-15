// Importation de l'interface modèle
import { RaceCandidate } from '@app/shared/models/models';
import { TraitsDto } from './traits.dto';

/**
 * Représente un Data Transfer Object (DTO) pour l'entité Race.
 * Utilisé pour transférer les données de manière sécurisée entre les couches de l'application.
 */
export class RaceDto {
  name: string;
  description: string;
  traits: TraitsDto[];
  subrace_of: string;
  url: string;

    /**
   * Crée une nouvelle instance de RaceDto.
   *
   * @param {Object} init - Données pour initialiser les propriétés du DTO. Les données doivent être de la forme suivante :
   * {
   *  id: bigint;
   *  name: string;
   *  description: string;
   *  traitsId: bigint[];
   * }
   */
  constructor(data?: Partial<RaceDto>) {
    Object.assign(this, data);
  }


  /**
   * Convertit le DTO en modèle Race.
   * 
   * @returns Race - Nouvelle instance du modèle.
   */
  toModel(): RaceCandidate {
    return {
      name: this.name,
      description: this.description,
      traits: this.traits ? this.traits.map(trait => trait.toModel()) : [],
    };
  }

  /**
   * Crée un DTO à partir des données d'une requête.
   * 
   * @param {any} req - Données de la requête à convertir.
   * @returns RaceDto - Nouvelle instance du DTO.
   */
  static fromRequest(req: any): RaceDto {
    return new RaceDto({
      name: req.name,
      description: req.description,
      traits: req.traits ? req.traits.map((trait: any) => TraitsDto.fromRequest(trait)) : [],
      subrace_of: req.subrace_of,
      url: req.url,
    });
  }
}
