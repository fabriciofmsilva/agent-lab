import OpenAI from "openai";

const client = new OpenAI(); // lê OPENAI_BASE_URL e OPENAI_API_KEY do ambiente
const model = process.env.MODEL ?? "llama3.1:8b";

const res = await client.chat.completions.create({
  model,
  messages: [
    { role: "user", content: "Explique em uma frase o que é tool calling." },
  ],
});

console.log(res.choices[0].message.content);
console.log("\n---\nusage:", res.usage); // prompt_tokens / completion_tokens / total_tokens
