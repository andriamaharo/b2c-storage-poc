import { cp, mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import PasswordReset from "../src/PasswordReset";

async function build() {
  const assetHost = "https://b2c-storage-poc.netlify.app";
  const output = resolve("out");

  await mkdir(output, { recursive: true });
  await cp(resolve("public"), output, { recursive: true });

  const html = "<!DOCTYPE html>" + renderToStaticMarkup(
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Odysseum - Réinitialiser mon mot de passe</title>
        <link rel="stylesheet" href={`${assetHost}/css/fonts.css`} />
      </head>
      <body>
        <PasswordReset assetHost={assetHost} />
      </body>
    </html>,
  );

  await mkdir(resolve(output, "passwordreset"), { recursive: true });
  await writeFile(resolve(output, "index.html"), html);
  await writeFile(resolve(output, "passwordreset/index.html"), html);
  console.log("Generated out/index.html and out/passwordreset/index.html without a client runtime.");
}

build().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
