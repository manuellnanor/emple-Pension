const fs = require("fs");
const path = require("path");

const sources = [
  {
    name: "CHAMPAGNE_HOSPITALS",
    path: "C:\\Users\\POQA DEVS\\.codex\\attachments\\e20e7544-2ac6-401d-8bab-6dba9aedccc3\\pasted-text.txt",
  },
  {
    name: "CHAMPAGNE_PHARMACIES",
    path: "C:\\Users\\POQA DEVS\\.codex\\attachments\\0adc10ff-574c-46a6-bdbf-2330777434eb\\pasted-text.txt",
  },
  {
    name: "CHAMPAGNE_OPTICAL_CENTRES",
    path: "C:\\Users\\POQA DEVS\\.codex\\attachments\\1ed4d8cb-23bf-46b3-a763-780988801924\\pasted-text.txt",
  },
  {
    name: "BURGUNDY_HOSPITALS",
    path: "C:\\Users\\POQA DEVS\\.codex\\attachments\\1616d4e6-ddfc-4d77-94f0-ec2fef33b3a2\\pasted-text.txt",
  },
  {
    name: "BURGUNDY_OPTICAL_CENTRES",
    path: "C:\\Users\\POQA DEVS\\.codex\\attachments\\2e313b58-3983-45d6-a691-4af926b77c07\\pasted-text.txt",
  },
  {
    name: "TURQUOISE_HOSPITALS",
    path: "C:\\Users\\POQA DEVS\\.codex\\attachments\\ec67d7c5-5f6b-4a56-90a9-38ecbcc4d035\\pasted-text.txt",
  },
  {
    name: "TURQUOISE_OPTICAL_CENTRES",
    path: "C:\\Users\\POQA DEVS\\.codex\\attachments\\69f1c7d9-c43e-497e-8b28-19828a51bfbe\\pasted-text.txt",
  },
  {
    name: "ORANGE_HOSPITALS",
    path: "C:\\Users\\POQA DEVS\\.codex\\attachments\\82fac248-8eda-4eff-9d43-a23065355689\\pasted-text.txt",
  },
  {
    name: "BEIGE_HOSPITALS",
    path: "C:\\Users\\POQA DEVS\\.codex\\attachments\\b8c78eef-9d34-4847-b091-9cd406df34c1\\pasted-text.txt",
  },
];
const outputPath = path.join(__dirname, "..", "src", "providerData.generated.ts");

const decode = (value) =>
  value
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&ndash;|â€“/g, "–")
    .replace(/&rsquo;|â€™/g, "’")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const parseRows = (source) => {
  const htmlRows = [...source.matchAll(/<tr>([\s\S]*?)<\/tr>/gi)]
    .map((match) => [...match[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((cell) => decode(cell[1])))
    .filter((cells) => cells.length === 4)
    .map(([institution, location, region, telephone]) => ({
      institution,
      location,
      region,
      telephone,
    }));

  if (htmlRows.length > 0) {
    return htmlRows;
  }

  return source
    .split(/\r?\n/)
    .map((line) => line.split("\t").map((cell) => decode(cell)))
    .filter((cells) => cells.length >= 4 && cells[0] && cells[0] !== "Name of Institution")
    .map(([institution, location, region, telephone]) => ({
      institution,
      location,
      region,
      telephone,
    }));
};

const datasets = sources.map((source) => ({
  name: source.name,
  rows: parseRows(fs.readFileSync(source.path, "utf8")),
}));

const output = `export interface ProviderRecord {
  institution: string;
  location: string;
  region: string;
  telephone: string;
}

${datasets
  .map(
    (dataset) =>
      `export const ${dataset.name}: ProviderRecord[] = ${JSON.stringify(dataset.rows, null, 2)};`,
  )
  .join("\n\n")}
`;

fs.writeFileSync(outputPath, output);
console.log(
  `Generated ${datasets.map((dataset) => `${dataset.rows.length} ${dataset.name}`).join(", ")}.`,
);
