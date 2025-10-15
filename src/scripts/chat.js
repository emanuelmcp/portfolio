document.addEventListener("DOMContentLoaded", () => {
  const chatMessages = document.getElementById("chat-messages");
  const chatInput = document.getElementById("chat-input");
  const sendButton = document.getElementById("chat-send");

  function getTime() {
    const now = new Date();
    return now.toLocaleTimeString("es-ES", { hour12: false });
  }

  function appendMessage(role, content) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `flex gap-3 ${role === "user" ? "justify-end" : "justify-start"}`;
    messageDiv.innerHTML = `
      <div class="max-w-[80%] space-y-2 ${role === "user" ? "order-2" : "order-1"}">
        <div class="flex items-center gap-2 text-xs text-muted-foreground">
          <span>${role === "user" ? "user@terminal" : "ai_assistant"}</span>
          <span>•</span>
          <span>${getTime()}</span>
        </div>
        <div class="border p-4 text-sm leading-relaxed rounded ${
          role === "user"
            ? "border-accent bg-accent/10 text-foreground"
            : "border-primary/30 bg-primary/5 text-foreground"
        }">
          <p>${content}</p>
        </div>
      </div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: "smooth" });
  }

  async function sendMessage() {
    const prompt = chatInput.value.trim();
    if (!prompt) return;

    appendMessage("user", prompt);
    chatInput.value = "";
    sendButton.disabled = true;

    const typingIndicator = document.createElement("div");
    typingIndicator.id = "typing";
    typingIndicator.className = "flex gap-3 justify-start";
    typingIndicator.innerHTML = `
      <div class="space-y-2">
        <div class="flex items-center gap-2 text-xs text-muted-foreground">
          <span>ai_assistant</span><span>•</span><span>typing...</span>
        </div>
        <div class="border border-primary/30 bg-primary/5 p-4">
          <div class="flex gap-1">
            <div class="w-2 h-2 bg-primary rounded-full animate-bounce" style="animation-delay: 0ms;"></div>
            <div class="w-2 h-2 bg-primary rounded-full animate-bounce" style="animation-delay: 150ms;"></div>
            <div class="w-2 h-2 bg-primary rounded-full animate-bounce" style="animation-delay: 300ms;"></div>
          </div>
        </div>
      </div>
    `;
    chatMessages.appendChild(typingIndicator);
    chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: "smooth" });

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();

      typingIndicator.remove();
      appendMessage("assistant", data.reply || "No hay respuesta.");
    } catch (error) {
      typingIndicator.remove();
      appendMessage("assistant", "❌ Error al conectar con el servidor.");
    } finally {
      sendButton.disabled = false;
    }
  }

  sendButton.addEventListener("click", sendMessage);
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
});
