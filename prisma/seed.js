const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.game.createMany({
    data: [
      {
        name: "The Elder Scrolls IV: Oblivion® Game of the Year Edition Deluxe",
        image:
          "https://www.dsogaming.com/wp-content/uploads/2016/12/Oblivion-new-feature-672x372.jpg",
        description:
          "The Elder Scrolls IV: Oblivion® Game of the Year Edition presents one of the best RPGs of all time like never before. Step inside the most richly detailed and vibrant game-world ever created. With a powerful combination of freeform gameplay and unprecedented graphics, you can unravel the main quest at your own pace or explore the vast world and find your own challenges. Also included in the Game of the Year edition are Knights of the Nine and the Shivering Isles expansion, adding new and unique quests and content to the already massive world of Oblivion. See why critics called Oblivion the Best Game of 2006.",
        price: 14.99,
        salePrice: 5.99,
        rating: 5,
        releaseDate: "Jun 16, 2009",
        genre: "RPG",
        developer: "Bethesda Game Studios®",
        minSystemReq:
          "OS: Windows XP, Windows 2000, Windows XP 64-Bit; Processor: 2 Ghz Intel Pentium 4 or equivalent; Memory: 512 MB; Graphics: 128 MB Direct3D compatible video card and DirectX 9.0 compatible driver; DirectX®: DirectX 9.0c; Hard Drive: 4.6 GB; Sound: DirectX 8.1 compatible",
      },
      {
        name: "The Elder Scrolls V: Skyrim Special Edition",
        image:
          "https://www.einerd.com.br/wp-content/uploads/2017/04/skyrimintro1.2.jpg",
        description:
          "Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more. Skyrim Special Edition also brings the full power of mods to the PC and consoles. New quests, environments, characters, dialogue, armor, weapons and more – with Mods, there are no limits to what you can experience.",
        price: 39.99,
        salePrice: 19.99,
        rating: 5,
        releaseDate: "Oct 27, 2016",
        genre: "RPG",
        developer: "Bethesda Game Studios",
        minSystemReq:
          "OS: Windows 7/8.1/10 (64-bit Version); Processor: Intel i5-750/AMD Phenom II X4-945; Memory: 8 GB RAM; Graphics: NVIDIA GTX 470 1GB /AMD HD 7870 2GB; Storage: 12 GB available space",
        recSystemReq:
          "OS: Windows 7/8.1/10 (64-bit Version); Processor: Intel i5-2400/AMD FX-8320; Memory: 8 GB RAM; Graphics: NVIDIA GTX 780 3GB /AMD R9 290 4GB; Storage: 12 GB available space",
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
