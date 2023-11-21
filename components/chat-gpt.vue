<script setup lang="ts">
interface Message {
  author: string
  content: string;
}
const value = ref('');
const messages = ref<Message[]>([]);
const isLoading = ref(false); // Nuevo estado para el indicador de carga

const sendMessage = async () => {
  const noRefMessage = value.value;
  if (value.value.trim()) {
    value.value = '';
    // Agregar mensaje del usuario al chat
    messages.value.push({ author: 'user', content: noRefMessage });
    isLoading.value = true; // Iniciar la carga
    try {
      // Enviar el mensaje al servidor
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role: "user", message: noRefMessage }),
      });
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
      const responseData = await response.json();
      // Agregar la respuesta del asistente al chat
      messages.value.push({ author: 'assistant', content: responseData.message });
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      // En caso de error también deberías manejar la posibilidad de mostrar un mensaje diferente o reintentar
    }
    isLoading.value = false; // Finalizar la carga
  }
};
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex items-center space-x-4">
        <UAvatar chip-color="primary" chip-text="" chip-position="top-right" size="xl" src="avatar.svg" alt="Avatar" />
        <div class="space-y-2">
          <div class=" space-y-0">
            <p class="text-xl font-bold">Emanuel Carrero</p>
            <p>Asistente virtual</p>
          </div>
        </div>
      </div>
    </template>
    <!-- Contenido del chat -->
    <div class="p-4 min-h-[250px] max-h-[250px] overflow-y-auto">
      <ul class="space-y-2">
        <li
          class="bg-blue-500 text-white float-left clear-both rounded-br-lg rounded-tr-lg rounded-tl-lg max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl px-4 py-2 my-1 text-sm">
          Hazme una pregunta!
        </li>
        <li v-for="(message, index) in messages" :key="index" :class="message.author === 'assistant'
          ? 'bg-blue-500 text-white float-left clear-both rounded-br-lg rounded-tr-lg rounded-tl-lg'
          : 'bg-green-500 text-white float-right clear-both rounded-bl-lg rounded-tl-lg rounded-tr-lg'"
          class="max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl px-4 py-2 my-1 text-sm">
          {{ message.content }}
        </li>
        <li
          class="bg-blue-500 text-white float-left clear-both rounded-br-lg rounded-tr-lg rounded-tl-lg max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl px-4 py-2 my-1"
          v-if="isLoading">
          <span class="typing" />
        </li>
      </ul>
    </div>
    <!-- Limpiar floats -->
    <div class="clear-both"></div>
    <template #footer>
      <div class="flex items-center space-x-4">
        <UInput v-model="value" class="flex-grow placeholder:italic" size="sm" :placeholder="useChatSuggestions().content"
          @keyup.enter="sendMessage" />
        <UButton icon="i-heroicons-paper-airplane" size="sm" color="primary" square variant="solid"
          @click="sendMessage" />
      </div>
    </template>
  </UCard>
</template>

<style scoped>
@keyframes typing {
  0% {
    content: '';
  }

  25% {
    content: '.';
  }

  50% {
    content: '..';
  }

  75% {
    content: '...';
  }

  100% {
    content: '';
  }
}


.typing::after {
  content: '';
  display: inline-block;
  width: 1em;
  animation: typing 1.5s steps(4) infinite;
}


/* Estilizar la barra de desplazamiento en general */
::-webkit-scrollbar {
  width: 12px;
  /* Ancho de la barra de desplazamiento */
}

/* Estilizar la pista (track) de la barra de desplazamiento */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
  /* Color de fondo de la pista */
}

/* Estilizar el control deslizante (thumb) de la barra de desplazamiento */
::-webkit-scrollbar-thumb {
  background: #48D57C;
  border-radius: 5px;
  /* Color de fondo del deslizador */
}

/* Estilizar el control deslizante al pasar el mouse */
::-webkit-scrollbar-thumb:hover {
  background: #23ac55;
  /* Color de fondo del deslizador al pasar el mouse */
}
</style>