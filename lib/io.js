import readline from "readline";

const io = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export const question = text =>
  new Promise((resolve, reject) => {
    try {
      return io.question(text, resolve);
    } catch (e) {
      reject(e);
    }
  });

export default io;
