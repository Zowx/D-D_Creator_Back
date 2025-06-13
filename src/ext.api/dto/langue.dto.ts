// Importation de l'interface modèle
import { Language } from '@shared/model/language.model';

/**
 * Représente un Data Transfer Object (DTO) pour l'entité Language.
 * Utilisé pour transférer les données de manière sécurisée entre les couches de l'application.
 */
export class LanguageDto {
  id: bigint;
  name: string;
  description: string;
  exotic: boolean;
  secret: boolean;

    /**
   * Crée une nouvelle instance de LanguageDto.
   *
   * @param {Object} init - Données pour initialiser les propriétés du DTO. Les données doivent être de la forme suivante :
   * {
   *  id: bigint;
   *  name: string;
   *  description: string;
   *  exotic: boolean;
   * }
   */
  constructor(data?: Partial<LanguageDto>) {
    Object.assign(this, data);
  }

  /**
   * Convertit le DTO en modèle Language.
   * 
   * @returns Language - Nouvelle instance du modèle.
   */
  toModel(): Language {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      exotic: this.exotic,
      secret: this.secret,
    };
  }

  /**
   * Crée un DTO à partir des données d'une requête.
   * 
   * @param {any} req - Données de la requête à convertir.
   * @returns LanguageDto - Nouvelle instance du DTO.
   */
  static fromRequest(req: any): LanguageDto {
    return new LanguageDto({
      id: req.id,
      name: req.name,
      description: req.desc,
      exotic: req.is_exotic,
      secret: req.is_secret,
    });
  }
}
