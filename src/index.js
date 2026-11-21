import prompt from "prompt";

import createQRCode from "./services/qrcode/create.js";
import createPassword from "./services/password/create.js";
import promptSchemaMain from "./prompts-schema/main.js";
import createUsername from "./services/username/create.js";

async function main() {
  prompt.get(promptSchemaMain, async (err, choose) => {
    if (err) console.log(err);

    if (choose.select == 1) await createQRCode();
    if (choose.select == 2) await createPassword();
    if (choose.select == 3) await createUsername();
  });

  prompt.start();
}

main();
