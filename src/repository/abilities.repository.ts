// import { Injectable } from '@nestjs/common';
// import { Prisma } from '@prisma/client';

// import { DatabaseService } from '@repository/database.service';
// import { Ability, AbilityCandidate } from '@app/core/models/models';
// import { AbilityCandidateDbo, AbilityDbo } from './dbo/dbo';

// @Injectable()
// export class AbilitiesRepository {

//     constructor(private readonly database: DatabaseService) {}

//     async findAll() {
//         return this.database.ability.findMany();
//     }

//     async findById(id: bigint) {
//         return new AbilityDbo(this.database.ability.findUnique({
//             where: { id }
//         })).toModel();
//     }

//     async create(ability: AbilityCandidate) {
//         return this.database.ability.create({
//             data: AbilityCandidateDbo.fromModel(ability)
//         });
//     }

//     async update(ability: Ability) {
//         const id = ability.id;
//         return this.database.ability.update({
//             where: { id },
//             data: AbilityCandidateDbo.fromModel(ability)
//         });
//     }

//     async delete(id: bigint) {
//         return this.database.ability.delete({
//             where: { id }
//         });
//     }
// }