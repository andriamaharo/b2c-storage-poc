import assert from "node:assert/strict";
import test from "node:test";
import { readTemplate, templateNames } from "../src/lib/templates.mjs";

test("les trois modèles contiennent chacun le point d'injection B2C", async () => {
  assert.deepEqual(templateNames, ["login", "registration", "passwordreset"]);

  for (const name of templateNames) {
    const html = await readTemplate(name);
    assert.match(html, /^<!DOCTYPE html>/i);
    assert.equal((html.match(/id=["']api["']/g) ?? []).length, 1, name);
  }
});

test("un nom de modèle inconnu est rejeté", async () => {
  await assert.rejects(readTemplate("../login"), /Unknown B2C template/);
  await assert.rejects(readTemplate("constructor"), /Unknown B2C template/);
});
