import { Class, ClassCandidate } from "@core/models/class.model";

export class ClassDbo {
    id: bigint;
    name: string;
    hitDice?: number;
    savingThrows: bigint[];
    subClass?: bigint;

    constructor(
        id: bigint,
        name: string,
        savingThrows: bigint[],
        hitDice?: number,
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
            model.savingThrows,
            model.hitDice,
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
            dbData.savingThrows?.map((a: any) => a.id.id) ?? [],
            dbData.hitDice,
            dbData.subclass ? dbData.subclass.id : undefined,
        );
    }

    toDb(): any {
        return {
            id: this.id,
            name: this.name,
            hitDice: this.hitDice,
            savingThrows: {
                connect: this.savingThrows.map((id) => ({ id })),
            },
            subclass: this.subClass
                ? { connect: { id: this.subClass } }
                : undefined,
        };
    }
}

export class ClassCandidateDbo {
    name: string;
    savingThrows: bigint[];
    hitDice?: number;
    subClass?: bigint;

    constructor(data?: Partial<ClassCandidateDbo>) {
        Object.assign(this, data);
    }

    static fromModel(model: ClassCandidate): ClassCandidateDbo {
        return new ClassCandidateDbo({
            name: model.name,
            savingThrows: model.savingThrows,
            hitDice: model.hitDice,
            subClass: model.subClass,
        });
    }

    toDb(): any {
        return {
            name: this.name,
            hitDice: this.hitDice,
            savingThrows: this.savingThrows ? {
                connect: this.savingThrows.map((id) => ({ id })),
            } : undefined,
            subclass: this.subClass
                ? { connect: { id: this.subClass } }
                : undefined,
        };
    }
}
