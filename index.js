import createManager from "./lib/manager";
import { question } from "./lib/io";

(async () => {
  const manager = await createManager();
  let line = "-_-";
  while (line) {
    line = await question("<You>:");
    const responce = await manager.process("en", line);
    console.log("<Carl>:", responce.answer);
  }
})();
