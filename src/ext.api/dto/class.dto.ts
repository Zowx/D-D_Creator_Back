// Importation de l'interface modèle
import { Class, ClassCandidate } from '@core/models/models';

/**
 * Représente un Data Transfer Object (DTO) pour l'entité Class.
 * Utilisé pour transférer les données de manière sécurisée entre les couches de l'application.
 */
export class ClassDto {
  name: string;
  hitDice: string;
  savingThrows: string[] | bigint[];
  subClass?: string | bigint;
  url: string;

  /**
   * Crée une nouvelle instance de ClassDto.
   *
   * @param {Object} init - Données pour initialiser les propriétés du DTO. Les données doivent être de la forme suivante :
   * {
   *  name: string;
   *  casterType: string;
   *  hitDie: number;
   *  savingThrows: string[];
   *  subClass?: bigint;
   * }
   */
  constructor(data?: Partial<ClassDto>) {
    Object.assign(this, data);
  }

  /**
   * Convertit le DTO en modèle Class.
   *
   * @returns Class - Nouvelle instance du modèle.
   */
  toModel(): ClassCandidate {
    return {
      name: this.name,
      hitDice: this.hitDice,
      savingThrows: this.savingThrows.filter((s) =>
        ['bigint', 'number'].includes(typeof s),
      ) as bigint[],
      subClass: typeof this.subClass == 'bigint' ? this.subClass : undefined,
    };
  }

  /**
   * Crée un DTO à partir des données d'une requête.
   *
   * @param {any} req - Données de la requête à convertir.
   * @returns ClassDto - Nouvelle instance du DTO.
   */
  static fromRequest(req: any): ClassDto {
    return new ClassDto({
      name: req.name,
      hitDice: req.hit_dice,
      savingThrows: req.saving_throws,
      subClass: req.subclass_of,
      url: req.url,
    });
  }
}
