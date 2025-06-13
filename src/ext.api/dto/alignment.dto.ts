// Importation de l'interface modèle
import { Alignment } from '@shared/model/alignment.model';

/**
 * Représente un Data Transfer Object (DTO) pour l'entité Alignment.
 * Utilisé pour transférer les données de manière sécurisée entre les couches de l'application.
 */
export class AlignmentDto {
  id: bigint;
  name: string;
  description: string;

    /**
   * Crée une nouvelle instance de AlignmentDto.
   *
   * @param {Object} init - Données pour initialiser les propriétés du DTO. Les données doivent être de la forme suivante :
   * {
   *  id: bigint;
   *  name: string;
   *  description: string;
   * }
   */
  constructor(data?: Partial<AlignmentDto>) {
    Object.assign(this, data);
  }

  /**
   * Convertit le DTO en modèle Alignment.
   * 
   * @returns Alignment - Nouvelle instance du modèle.
   */
  toModel(): Alignment {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
    };
  }

  /**
   * Crée un DTO à partir des données d'une requête.
   * 
   * @param {any} req - Données de la requête à convertir.
   * @returns AlignmentDto - Nouvelle instance du DTO.
   */
  static fromRequest(req: any): AlignmentDto {
    return new AlignmentDto({
      id: req.id,
      name: req.name,
      description: req.desc,
    });
  }
}
