import { readFile } from "node:fs/promises";
import { join } from "node:path";

const templates = {
  login: ["login", "custom-ui.html"],
  registration: ["registration", "selfasserted.html"],
  passwordreset: ["passwordreset", "passwordreset.html"],
};

export const templateNames = Object.keys(templates);

export async function readTemplate(name) {
  if (!Object.hasOwn(templates, name)) {
    throw new Error(`Unknown B2C template: ${name}`);
  }

  const file = join(process.cwd(), "odysseum", "odysseum", ...templates[name]);
  return readFile(file, "utf8");
}
