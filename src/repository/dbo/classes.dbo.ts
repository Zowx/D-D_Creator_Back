import { Class, ClassCandidate } from "@core/models/class.model";

export class ClassDbo {
    id: bigint;
    name: string;
    hitDice: number;
    savingThrows: bigint[];
    subClass?: bigint;

    constructor(
        id: bigint,
        name: string,
        hitDice: number,
        savingThrows: bigint[],
        subClass?: bigint,
    ) {
        this.id = id;
        this.name = name;
        this.hitDice = hitDice;
        this.savingThrows = savingThrows;
        this.subClass = subClass;
    }

    static fromModel(model: Class): ClassDbo {
        return new ClassDbo(
            model.id,
            model.name,
            model.hitDice,
            model.savingThrows,
            model.subClass,
        );
    }

    toModel(): Class {
        return {
            id: this.id,
            name: this.name,
            hitDice: this.hitDice,
            savingThrows: this.savingThrows,
            subClass: this.subClass,
        };
    }

    static fromDb(dbData: any): ClassDbo {
        return new ClassDbo(
            dbData.id,
            dbData.name,
            dbData.hitDice,
            dbData.savingThrows,
            dbData.subClass,
        );
    }

    toDb(): any {
        return {
            id: this.id,
            name: this.name,
            hitDice: this.hitDice,
            savingThrows: this.savingThrows,
            subClass: this.subClass,
        };
    }
}

export class ClassCandidateDbo {
    name: string;
    hitDice: number;
    savingThrows: bigint[];
    subClass?: bigint;

    constructor(data?: Partial<ClassCandidateDbo>) {
        Object.assign(this, data);
    }

    static fromModel(model: ClassCandidate): ClassCandidateDbo {
        return new ClassCandidateDbo({
            name: model.name,
            hitDice: model.hitDice,
            savingThrows: model.savingThrows,
            subClass: model.subClass,
        });
    }

    toDb(): any {
        return {
            name: this.name,
            hitDice: this.hitDice,
            savingThrows: this.savingThrows,
            subClass: this.subClass,
        };
    }
}
