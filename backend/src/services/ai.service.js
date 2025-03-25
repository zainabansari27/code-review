const { GoogleGenerativeAI } = require("@google/generative-ai");
console.log(process.env.GOOGLE_GEMINI_KEY,"in service");
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });


async function generateContent(prompt) {
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = generateContent;