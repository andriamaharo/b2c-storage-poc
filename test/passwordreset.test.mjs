import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import test from "node:test";

test("les deux pages sont identiques, statiques et contiennent #api vide", async () => {
  const home = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  const reset = await readFile(new URL("../out/passwordreset/index.html", import.meta.url), "utf8");
  assert.equal(home, reset);
  assert.match(home, /^<!DOCTYPE html>/);
  assert.equal((home.match(/<div id="api"><\/div>/g) ?? []).length, 1);
  assert.doesNotMatch(home, /<script\b|_next\/|__next|<form\b/);
  for (const name of ["unified_container", "login-container-reset", "login-email-success notVisble", "login-password-success notVisble"]) {
    assert.ok(home.includes(name), name);
  }
});

test("toutes les ressources HTML et CSS sont absolues et publiées", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  const css = await readFile(new URL("../out/css/paswordreset.css", import.meta.url), "utf8");
  const fonts = await readFile(new URL("../out/css/fonts.css", import.meta.url), "utf8");
  const resources = [
    ...[...html.matchAll(/(?:src|href)="([^"]+)"/g)].map((match) => match[1]).filter((url) => !url.startsWith("https://odysseum.klepierre.fr")),
    ...[...(css + fonts).matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)].map((match) => match[1]),
  ];
  assert.ok(resources.length > 5);
  for (const resource of resources) {
    const url = new URL(resource);
    assert.equal(url.origin, "https://b2c-storage-poc.netlify.app");
    await access(new URL(`../out${url.pathname}`, import.meta.url));
  }
});
