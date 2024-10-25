import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config'


async function helloGemini() {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = "Escribe una historia para niños corta.";

        const result = await model.generateContent(prompt);
        console.log(result.response.text());
    } catch (error) {
        console.log(error.message);
    }
}

helloGemini()