// src/pages/api/chat.ts
import type { APIRoute } from "astro";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const { prompt } = await request.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Eres un asistente técnico útil y profesional." },
        { role: "user", content: prompt },
      ],
    });

    const message = completion.choices[0]?.message?.content ?? "Sin respuesta.";

    return new Response(JSON.stringify({ reply: message }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Error interno del servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
