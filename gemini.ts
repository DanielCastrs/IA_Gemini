import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const googlekey = process.env.API_KEY;
const ai = new GoogleGenAI({
  apiKey: `${googlekey}`,
});
const pergunta = require("readline-sync").question("Qual a sua pergunta? ");
async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: pergunta,
  });
  console.log(response.text);
}

main();
