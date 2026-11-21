import {
  LOWERCASE_LETTERS,
  NUMBERS,
  SPECIAL_CHARACTERS,
  UPPERCASE_LETTERS,
} from "../../config.js";

async function permittedCharacters(type) {
  let permitted = [];

  if (type === "username") {
    permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
  } else {
    if (UPPERCASE_LETTERS === "true")
      permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    if (LOWERCASE_LETTERS === "true")
      permitted.push(..."abcdefghijklmnopqrstuvwxyz");
  }

  if (NUMBERS === "true" && type === "password")
    permitted.push(..."0123456789");

  if (SPECIAL_CHARACTERS === "true" && type === "password")
    permitted.push(..."!@#$%^&*()-_");

  return permitted;
}

export default permittedCharacters;
