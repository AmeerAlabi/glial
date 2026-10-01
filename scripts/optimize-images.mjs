// Resizes and compresses source images into public/images.
// Usage: node scripts/optimize-images.mjs <input> <output> [maxWidth] [quality]
// With no arguments it re-runs the initial asset migration below.
import sharp from 'sharp'
import { mkdirSync } from 'node:fs'
import { dirname } from 'node:path'

// Original sources were in src/Assets/Images (see git history before the redesign).
const SRC = 'src/Assets/Images'

// [source, destination, maxWidth, quality]
const MIGRATION = [
  // Field photography
  [`${SRC}/ev4.jpg`, 'public/images/outreach/cgm-1-group.jpg', 1800, 80],
  [`${SRC}/ev3.jpg`, 'public/images/outreach/cgm-1-helmet-fitting.jpg', 1600, 80],
  [`${SRC}/ev2.jpg`, 'public/images/outreach/cgm-1-flyer.jpg', 1400, 80],
  [`${SRC}/ev1.jpg`, 'public/images/outreach/cgm-1-yoruba-placard.jpg', 1400, 80],
  // Team portraits
  [`${SRC}/mb.png`, 'public/images/team/mubarak-mustapha.jpg', 600, 82],
  [`${SRC}/jm.png`, 'public/images/team/adedoyin-james.jpg', 600, 82],
  [`${SRC}/am.png`, 'public/images/team/ameer-alabi.jpg', 600, 82],
  [`${SRC}/aam.png`, 'public/images/team/abdulrahman-amzat.jpg', 600, 82],
  [`${SRC}/bj.png`, 'public/images/team/benjamin-succop.jpg', 600, 82],
  // Infographics are served as the original files, untouched (not optimised).
]

const LOGOS = [
  [`${SRC}/afric.png`, 'public/images/partners/africa-cdc.png'],
  [`${SRC}/mission.png`, 'public/images/partners/mission-brain-unilorin.png'],
  [`${SRC}/strong.png`, 'public/images/partners/kei-strong-foundation.png'],
]

async function optimize(input, output, maxWidth = 1600, quality = 80) {
  mkdirSync(dirname(output), { recursive: true })
  const img = sharp(input).rotate().resize({ width: maxWidth, withoutEnlargement: true })
  const info = await img.flatten({ background: '#ffffff' }).jpeg({ quality, mozjpeg: true }).toFile(output)
  console.log(`${output}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`)
}

const [, , input, output, maxWidth, quality] = process.argv
if (input && output) {
  await optimize(input, output, Number(maxWidth) || undefined, Number(quality) || undefined)
} else {
  for (const job of MIGRATION) await optimize(...job)
  for (const [from, to] of LOGOS) {
    mkdirSync(dirname(to), { recursive: true })
    await sharp(from).resize({ width: 400, withoutEnlargement: true }).png({ compressionLevel: 9 }).toFile(to)
    console.log(to)
  }
}
