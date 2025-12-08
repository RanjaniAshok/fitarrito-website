import { PrismaClient } from "../generated/prisma";
import menu from "./data/menu.json" assert { type: "json" };

const prisma = new PrismaClient();

type MenuJsonItem = {
  title: string;
  description?: string;
  price?: number;
  category?: string;
  imageUrl?: string;
};

async function main() {
  console.log("🌱 Seeding MenuItem from prisma/data/menu.json...");

  const data = (menu as MenuJsonItem[]).filter((i) => i?.title);

  // optional: clean existing
  await prisma.menuItem.deleteMany();

  if (data.length === 0) {
    console.warn("No items in prisma/data/menu.json");
    return;
  }
  const categoryNames = Array.from(
    new Set(data.map((i) => i.category).filter(Boolean) as string[])
  );
  const categoryByName = new Map<string, number>();
  for (const name of categoryNames) {
    let cat = await prisma.category.findFirst({ where: { name } });
    if (!cat) cat = await prisma.category.create({ data: { name } });
    categoryByName.set(name, cat.id); // number, not string
  }

  await prisma.menuItem.createMany({
    data: data
      .filter((i) => typeof i.price === "number" && i.category && categoryByName.has(i.category))
      .map((i) => ({
        title: i.title,
        description: i.description ?? "", // Required field
        price: Math.round(i.price as number), // Must be Int, not Float
        imageUrl: i.imageUrl ?? null,
        categoryId: categoryByName.get(i.category!)!, // number
      })),
  });


  const count = await prisma.menuItem.count();
  console.log(`✅ Seed complete. MenuItem count: ${count}`);
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
