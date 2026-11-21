import { USERNAME_MAX_LENGTH } from "../../../config.js";
import permittedCharacters from "../../utils/permitted-characters.js";

async function handle(err, props) {
  if (err) {
    console.log("error on application");
    return;
  }

  let characters = [];
  let username = "";
  const name = props.name;

  const usernameLength = Number(USERNAME_MAX_LENGTH);
  characters = await permittedCharacters("username");

  if (characters.length === 0) {
    console.log(name);
    return;
  }

  const remainingLength = Math.max(usernameLength - name.length, 0);

  for (let i = 0; i < remainingLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    username += characters[index];
  }

  console.log(name + username);
}

export default handle;
