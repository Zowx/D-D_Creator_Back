// Importation de l'interface modèle
import { TraitsCandidate } from '@app/shared/models/models';

/**
 * Représente un Data Transfer Object (DTO) pour l'entité Traits.
 * Utilisé pour transférer les données de manière sécurisée entre les couches de l'application.
 */
export class TraitsDto {
  name: string;
  description: string;

    /**
   * Crée une nouvelle instance de TraitsDto.
   *
   * @param {Object} init - Données pour initialiser les propriétés du DTO. Les données doivent être de la forme suivante :
   * {
   *  id: bigint;
   *  name: string;
   *  description: string;
   * }
   */
  constructor(data?: Partial<TraitsDto>) {
    Object.assign(this, data);
  }


  /**
   * Convertit le DTO en modèle Traits.
   * 
   * @returns Traits - Nouvelle instance du modèle.
   */
  toModel(): TraitsCandidate {
    return {
      name: this.name,
      description: this.description,
    };
  }

  /**
   * Crée un DTO à partir des données d'une requête.
   * 
   * @param {any} req - Données de la requête à convertir.
   * @returns TraitsDto - Nouvelle instance du DTO.
   */
  static fromRequest(req: any): TraitsDto {
    return new TraitsDto({
      name: req.name,
      description: req.desc,
    });
  }
}
