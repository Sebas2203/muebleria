import sharp from "sharp";
import { readdir } from "fs/promises";
import { join } from "path";

const folders = [
  "cuarto",
  "exterior",
  "mesa",
  "baño",
  "puerta",
  "cocina",
  "sala",
  "otros",
];

for (const folder of folders) {
  const dir = `src/assets/images/${folder}`;
  const files = await readdir(dir);
  const jpgs = files.filter((f) => f.endsWith(".jpg"));

  for (const file of jpgs) {
    const input = join(dir, file);
    const output = join(dir, file.replace(".jpg", ".webp"));
    await sharp(input).webp({ quality: 75 }).toFile(output);
    console.log(`✓ ${folder}/${file}`);
  }
}

console.log("¡Listo! Todas las imágenes convertidas a WebP.");
