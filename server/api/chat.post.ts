import OpenAI from "openai";
import { MessageContentText } from "openai/resources/beta/threads/messages/messages";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(JSON.stringify(body));
  try {
    const threadResponse = await createThread(body.message);
    console.log("Thread response", threadResponse);
    // Una vez creado el hilo, inicia una ejecución (run) con el asistente
    const responseRunner = await runResponse(threadResponse.id);
    console.log("Response runner", responseRunner);
    const messages = await waitForRunAndRetrieveMessages(
      threadResponse.id,
      responseRunner.id
    );
    // @ts-ignore
    const assistantMessage = messages[0].content[0].text.value;
    return { message: assistantMessage };
  } catch (error) {
    console.error("Error al obtener respuesta de GPT:", error);
    return createError({ statusCode: 500, message: "Server error" });
  }
});

const createThread = async (message: string) => {
  return await openai.beta.threads.create({
    messages: [
      {
        role: "user",
        content: message, // El mensaje inicial que el usuario envía al asistente
      },
    ],
  });
};

const runResponse = async (threadId: string) => {
  return await openai.beta.threads.runs.create(
    threadId, // Aquí estaba el error. Usamos 'threadResponse.id' en lugar de 'threadResponse.data.id'
    {
      assistant_id: "asst_AUkhMKfLQR9XwToWSyFRnZBJ", // Usa el ID de tu asistente
    }
  );
};

const waitForRunAndRetrieveMessages = async (
  threadId: string,
  runId: string
) => {
  let runStatus = "queued";
  let runResponse;
  while (runStatus === "queued" || runStatus === "in_progress") {
    // Esperar un corto período de tiempo antes de sondear nuevamente
    await new Promise((resolve) => setTimeout(resolve, 5000));
    // Recuperar el estado actual del run
    runResponse = await openai.beta.threads.runs.retrieve(threadId, runId);
    runStatus = runResponse.status;
    if (runStatus === "failed" || runStatus === "cancelled") {
      throw new Error(
        `Run did not complete successfully. Status: ${runStatus}`
      );
    }
  }
  if (runStatus === "completed") {
    // Recuperar los mensajes del hilo
    const messagesResponse = await openai.beta.threads.messages.list(threadId);
    messagesResponse.data.forEach((message, index) => {
      console.log(`Message ${index}:`, JSON.stringify(message.content));
    });
    return messagesResponse.data;
  } else {
    throw new Error("Run did not complete successfully.");
  }
};
