// Importation de l'interface modèle
import { Alignment, AlignmentCandidate } from '../../core/models/alignment.model';

/**
 * Représente un Data Transfer Object (Dbo) pour l'entité Alignment.
 * Utilisé pour transférer les données de manière sécurisée entre les couches de l'application.
 */
export class AlignmentDbo {
  id: bigint;
  name: string;
  description: string;

    /**
   * Crée une nouvelle instance de AlignmentDbo.
   *
   * @param {Object} init - Données pour initialiser les propriétés du Dbo. Les données doivent être de la forme suivante :
   * {
   *  id: bigint;
   *  name: string;
   *  description: string;
   * }
   */
  constructor(data?: Partial<AlignmentDbo>) {
    Object.assign(this, data);
  }


  /**
   * Crée un Dbo à partir d'un modèle Alignment.
   * 
   * @param Alignment model - Instance du modèle à convertir.
   * @returns AlignmentDbo - Nouvelle instance du Dbo.
   */
  static fromModel(model: Alignment): AlignmentDbo {
    return new AlignmentDbo({
      id: model.id,
      name: model.name,
      description: model.description,
    });
  }

  /**
   * Convertit le Dbo en modèle Alignment.
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
   * Crée un Dbo à partir des données d'une requête.
   * 
   * @param {any} req - Données de la requête à convertir.
   * @returns AlignmentDbo - Nouvelle instance du Dbo.
   */
  static fromDb(req: any): AlignmentDbo {
    return new AlignmentDbo({
      id: req.id,
      name: req.name,
      description: req.description,
    });
  }

  /**
   * Convertit le Dbo en un format adapté à une requête.
   * 
   * @returns {any} - Données prêtes à être envoyées dans une requête.
   */
  toDb(): any {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
    };
  }
}

export class AlignmentCandidateDbo {
  name: string;
  description: string;

  constructor(data?: Partial<AlignmentCandidateDbo>) {
    Object.assign(this, data);
  }

  static fromModel(model: AlignmentCandidate): AlignmentCandidateDbo {
    return new AlignmentCandidateDbo({
      name: model.name,
      description: model.description,
    });
  }

  toDb(): any {
    return {
      name: this.name,
      description: this.description,
    };
  }
}