export const useVirtualAssistant = async () => {
  const value = ref("");
  const error = ref(false);
  const isLoading = ref(false);

  if (value.value.trim()) {
    try {
      isLoading.value = true;
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: "user", message: value.value }),
      });
      if (!response.ok) error.value = true;
      const responseData = await response.json();
      isLoading.value = false;
    } catch (err) {
      error.value = true;
    }
    value.value = "";
  }
};
