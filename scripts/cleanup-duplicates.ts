import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function cleanupDuplicates() {
  console.log('🧹 Starting cleanup of duplicate entries...');

  try {
    // Clean up duplicate Abilities
    console.log('📍 Cleaning Ability duplicates...');
    const duplicateAbilities = await prisma.$queryRaw<
      Array<{ name: string; count: bigint }>
    >`
      SELECT name, COUNT(*) as count 
      FROM "Ability" 
      GROUP BY name 
      HAVING COUNT(*) > 1
    `;

    for (const duplicate of duplicateAbilities) {
      const abilities = await prisma.ability.findMany({
        where: { name: duplicate.name },
        orderBy: { id: 'asc' },
      });

      // Keep the first one, delete the rest
      if (abilities.length > 1) {
        const toDelete = abilities.slice(1);
        for (const ability of toDelete) {
          await prisma.ability.delete({ where: { id: ability.id } });
        }
        console.log(
          `  ✅ Removed ${toDelete.length} duplicate(s) of "${duplicate.name}"`,
        );
      }
    }

    // Clean up duplicate Alignments
    console.log('📍 Cleaning Alignment duplicates...');
    const duplicateAlignments = await prisma.$queryRaw<
      Array<{ name: string; count: bigint }>
    >`
      SELECT name, COUNT(*) as count 
      FROM "Alignment" 
      GROUP BY name 
      HAVING COUNT(*) > 1
    `;

    for (const duplicate of duplicateAlignments) {
      const alignments = await prisma.alignment.findMany({
        where: { name: duplicate.name },
        orderBy: { id: 'asc' },
      });

      if (alignments.length > 1) {
        const toDelete = alignments.slice(1);
        for (const alignment of toDelete) {
          await prisma.alignment.delete({ where: { id: alignment.id } });
        }
        console.log(
          `  ✅ Removed ${toDelete.length} duplicate(s) of "${duplicate.name}"`,
        );
      }
    }

    // Clean up duplicate Classes
    console.log('📍 Cleaning Class duplicates...');
    const duplicateClasses = await prisma.$queryRaw<
      Array<{ name: string; count: bigint }>
    >`
      SELECT name, COUNT(*) as count 
      FROM "Class" 
      GROUP BY name 
      HAVING COUNT(*) > 1
    `;

    for (const duplicate of duplicateClasses) {
      const classes = await prisma.class.findMany({
        where: { name: duplicate.name },
        orderBy: { id: 'asc' },
      });

      if (classes.length > 1) {
        const toDelete = classes.slice(1);
        for (const cls of toDelete) {
          await prisma.class.delete({ where: { id: cls.id } });
        }
        console.log(
          `  ✅ Removed ${toDelete.length} duplicate(s) of "${duplicate.name}"`,
        );
      }
    }

    // Clean up duplicate Races
    console.log('📍 Cleaning Race duplicates...');
    const duplicateRaces = await prisma.$queryRaw<
      Array<{ name: string; count: bigint }>
    >`
      SELECT name, COUNT(*) as count 
      FROM "Race" 
      GROUP BY name 
      HAVING COUNT(*) > 1
    `;

    for (const duplicate of duplicateRaces) {
      const races = await prisma.race.findMany({
        where: { name: duplicate.name },
        orderBy: { id: 'asc' },
      });

      if (races.length > 1) {
        const toDelete = races.slice(1);
        for (const race of toDelete) {
          // Delete associated RaceTrait records first
          await prisma.raceTrait.deleteMany({
            where: { raceId: race.id },
          });
          await prisma.race.delete({ where: { id: race.id } });
        }
        console.log(
          `  ✅ Removed ${toDelete.length} duplicate(s) of "${duplicate.name}"`,
        );
      }
    }

    // Clean up duplicate Traits
    console.log('📍 Cleaning Trait duplicates...');
    const duplicateTraits = await prisma.$queryRaw<
      Array<{ name: string; count: bigint }>
    >`
      SELECT name, COUNT(*) as count 
      FROM "Trait" 
      GROUP BY name 
      HAVING COUNT(*) > 1
    `;

    for (const duplicate of duplicateTraits) {
      const traits = await prisma.trait.findMany({
        where: { name: duplicate.name },
        orderBy: { id: 'asc' },
      });

      if (traits.length > 1) {
        const toDelete = traits.slice(1);
        for (const trait of toDelete) {
          // Delete associated RaceTrait records first
          await prisma.raceTrait.deleteMany({
            where: { traitId: trait.id },
          });
          await prisma.trait.delete({ where: { id: trait.id } });
        }
        console.log(
          `  ✅ Removed ${toDelete.length} duplicate(s) of "${duplicate.name}"`,
        );
      }
    }

    // Clean up duplicate Skills
    console.log('📍 Cleaning Skill duplicates...');
    const duplicateSkills = await prisma.$queryRaw<
      Array<{ name: string; count: bigint }>
    >`
      SELECT name, COUNT(*) as count 
      FROM "Skill" 
      GROUP BY name 
      HAVING COUNT(*) > 1
    `;

    for (const duplicate of duplicateSkills) {
      const skills = await prisma.skill.findMany({
        where: { name: duplicate.name },
        orderBy: { id: 'asc' },
      });

      if (skills.length > 1) {
        const toDelete = skills.slice(1);
        for (const skill of toDelete) {
          await prisma.skill.delete({ where: { id: skill.id } });
        }
        console.log(
          `  ✅ Removed ${toDelete.length} duplicate(s) of "${duplicate.name}"`,
        );
      }
    }

    // Clean up duplicate Languages
    console.log('📍 Cleaning Language duplicates...');
    const duplicateLanguages = await prisma.$queryRaw<
      Array<{ name: string; count: bigint }>
    >`
      SELECT name, COUNT(*) as count 
      FROM "Language" 
      GROUP BY name 
      HAVING COUNT(*) > 1
    `;

    for (const duplicate of duplicateLanguages) {
      const languages = await prisma.language.findMany({
        where: { name: duplicate.name },
        orderBy: { id: 'asc' },
      });

      if (languages.length > 1) {
        const toDelete = languages.slice(1);
        for (const language of toDelete) {
          await prisma.language.delete({ where: { id: language.id } });
        }
        console.log(
          `  ✅ Removed ${toDelete.length} duplicate(s) of "${duplicate.name}"`,
        );
      }
    }

    console.log('✅ Cleanup completed successfully!');
  } catch (error) {
    console.error('❌ Error during cleanup:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

cleanupDuplicates().catch((error) => {
  console.error(error);
  process.exit(1);
});
