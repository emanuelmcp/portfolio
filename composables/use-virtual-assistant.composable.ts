export async function useVirtualAssistant() {
  const value = ref("");
  const messages = ref<Message[]>([]);
  const isLoading = ref(false);
  const sendMessage = async () => {
    const currentMessage = value.value.trim(); // Obtén el mensaje actual
    if (currentMessage) {
      messages.value.push({ author: "user", content: currentMessage });
      isLoading.value = true; // Iniciar la carga
      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ role: "user", message: currentMessage }),
        });
        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }
        const responseData = await response.json();
        messages.value.push({ author: "assistant", content: responseData.message });
      } catch (error) {}
      isLoading.value = false;
    }
  };

  return {
    sendMessage,
    value,
    messages,
    isLoading,
  };
}
