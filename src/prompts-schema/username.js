import chalk from "chalk";

const promptSchemaQRCode = [
  {
    name: "name",
    description: chalk.yellow("Digite seu nome ou apelido"),
    pattern: /^[a-zA-Z]{1,10}$/,
    message: chalk.red.italic(
      "Escolha apenas letras e no máximo 10 caracteres",
    ),
    required: true,
  },
];

export default promptSchemaQRCode;
