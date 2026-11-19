import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("la route de réinitialisation réutilise le composant React", async () => {
  const route = await readFile(new URL("../src/app/passwordreset/page.tsx", import.meta.url), "utf8");
  assert.match(route, /export \{ default \} from "\.\.\/page"/);
  const page = await readFile(new URL("../src/app/page.tsx", import.meta.url), "utf8");
  assert.equal((page.match(/id="api"/g) ?? []).length, 1);
  assert.doesNotMatch(page, /passwordreset\.html|readTemplate/);
});
