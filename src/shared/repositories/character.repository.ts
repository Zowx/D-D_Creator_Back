import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { Character } from "../model/character.model";

@Injectable()
export class CharacterRepository {
  private prisma = new PrismaClient();
  
    async getAllCharacters(): Promise<Character[]> {
        return this.prisma.character.findMany();
    }
    
    async getCharacterById(id: number): Promise<Character | null> {
        return this.prisma.character.findUnique({
            where: { id },
        });
    }

    async createCharacter(characterData: Character): Promise<Character> {
        return this.prisma.character.create({
        data: characterData,
        });
    }
}
