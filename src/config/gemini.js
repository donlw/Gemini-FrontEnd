import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyDT0c7FqAkR1ByT3juqPPJgNKeaW6b9xHM";

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

async function runChat(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text();
}

export default runChat;
