import chalk from "chalk";

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold(
      "Escolha a ferramenta (1 - QRCODE\n (2- PASSWORD\n (3 - USERNAME",
    ),
    pattern: /^[1-3]+$/,
    message: chalk.red.italic("Escolha apenas entre 1, 2 ou 3"),
    required: true,
  },
];

export default promptSchemaMain;
