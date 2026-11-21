import handle from "./handle.js";
import usernamePromptSchema from "../../prompts-schema/username.js";
import prompt from "prompt";

async function createUsername() {
  prompt.get(usernamePromptSchema, handle);
  prompt.start();
}

export default createUsername;
