import nlp from "node-nlp";
import train from "./train";

const manager = new nlp.NlpManager({ languages: ["en"] });

export default async () => {
  await train(manager);
  return manager;
};
