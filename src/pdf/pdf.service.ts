import { Injectable } from '@nestjs/common';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import * as fs from 'fs';
import * as path from 'path';
import { PdfDto } from './dto/pdf.dto'; // adapte le chemin selon ton projet

@Injectable()
export class PdfService {
  async fillForm(data: PdfDto): Promise<Buffer> {
    try {
      const pdfPath = './dnd.pdf';
      const pdfBytes = fs.readFileSync(pdfPath);

      const pdfDoc = await PDFDocument.load(pdfBytes);
      const form = pdfDoc.getForm();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

      // 🔁 Aplatir les champs imbriqués
      const flatData: Record<string, any> = {
        ClassLevel: data.classLevel,
        Background: data.background,
        PlayerName: data.playerName,
        CharacterName: data.characterName,
        'Race ': data.race,
        Alignment: data.alignment,
        XP: data.xp,
        Inspiration: '', // optionnel

        // Abilities
        STR: data.abilities.str,
        DEX: data.abilities.dex,
        CON: data.abilities.con,
        INT: data.abilities.int,
        WIS: data.abilities.wis,
        CHA: data.abilities.cha,
        STRmod: data.abilities.strMod,
        'DEXmod ': data.abilities.dexMod,
        CONmod: data.abilities.conMod,
        INTmod: data.abilities.intMod,
        WISmod: data.abilities.wisMod,
        CHamod: data.abilities.chaMod,

        // Combat
        ProfBonus: data.combatStats.profBonus,
        AC: data.combatStats.ac,
        Initiative: data.combatStats.initiative,
        Speed: data.combatStats.speed,
        HPMax: data.combatStats.hpMax,
        HPCurrent: data.combatStats.hpCurrent,
        HPTemp: data.combatStats.hpTemp,
        HDTotal: data.combatStats.hdTotal,
        HD: data.combatStats.hd,
        Passive: data.combatStats.passive,

        // Saving Throws
        'ST Strength': data.savingThrows.strength,
        'ST Dexterity': data.savingThrows.dexterity,
        'ST Constitution': data.savingThrows.constitution,
        'ST Intelligence': data.savingThrows.intelligence,
        'ST Wisdom': data.savingThrows.wisdom,
        'ST Charisma': data.savingThrows.charisma,

        // Skills
        Acrobatics: data.skills.acrobatics,
        Animal: data.skills.animalHandling,
        Arcana: data.skills.arcana,
        Athletics: data.skills.athletics,
        'Deception ': data.skills.deception,
        'History ': data.skills.history,
        Insight: data.skills.insight,
        Intimidation: data.skills.intimidation,
        'Investigation ': data.skills.investigation,
        Medicine: data.skills.medicine,
        Nature: data.skills.nature,
        'Perception ': data.skills.perception,
        Performance: data.skills.performance,
        Persuasion: data.skills.persuasion,
        Religion: data.skills.religion,
        SleightofHand: data.skills.sleightOfHand,
        'Stealth ': data.skills.stealth,
        Survival: data.skills.survival,

        // Traits
        'PersonalityTraits ': data.traits.personalityTraits,
        Ideals: data.traits.ideals,
        Bonds: data.traits.bonds,
        Flaws: data.traits.flaws,

        // Attaques et sorts
        AttacksSpellcasting: data.attacksSpellcasting,

        // Monnaie
        CP: data.currency.cp,
        SP: data.currency.sp,
        EP: data.currency.ep,
        GP: data.currency.gp,
        PP: data.currency.pp,

        // Équipement et langues
        ProficienciesLang: data.proficienciesLanguages,
        Equipment: data.equipment,
        'Features and Traits': data.featuresAndTraits,
      };

      // Armes (Wpn1, Wpn2, Wpn3)
      data.weapons.forEach((weapon, index) => {
        const n = index + 1;
        flatData[`Wpn Name${n > 1 ? ' ' + n : ''}`] = weapon.name;
        flatData[`Wpn${n} AtkBonus${n > 1 ? ' ' : ''}`] = weapon.attackBonus;
        flatData[`Wpn${n} Damage${n > 1 ? ' ' : ''}`] = weapon.damage;
      });

      // 📄 Champs du PDF
      const fields = form.getFields();

      for (const field of fields) {
        const name = field.getName();

        // S'il s'agit d'une checkbox active
        if (data.activeCheckboxes.includes(name)) {
          try {
            form.getCheckBox(name).check();
          } catch {
            // champ non checkbox, on ignore
          }
          continue;
        }

        const value = flatData[name];
        if (value !== undefined) {
          try {
            form.getTextField(name).setText(String(value));
            form.getTextField(name).updateAppearances(font);
          } catch {
            // champ non texte, on ignore
          }
        }
      }

      const filledPdfBytes = await pdfDoc.save();
      return Buffer.from(filledPdfBytes);
    } catch (err) {
      console.error('Erreur lors du remplissage de la fiche :', err);
      throw new Error('Impossible de générer le PDF');
    }
  }
}
