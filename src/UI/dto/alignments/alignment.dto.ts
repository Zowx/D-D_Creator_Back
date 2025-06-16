import { Alignment } from "@app/core/models/alignment.model";

export class AlignmentDto {
    id: bigint;
    name: string;
    description: string;

    toModel(): Alignment {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
        } as Alignment;
    }
}