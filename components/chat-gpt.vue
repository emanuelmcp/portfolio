<script setup lang="ts">
const { isLoading, messages, sendMessage: send, value } = await useVirtualAssistant();

const sendMessage = () => {
  send();
  value.value = "";
};
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex items-center space-x-4">
        <UAvatar chip-color="primary" chip-text="" chip-position="top-right" size="xl" src="avatar.svg" alt="Avatar" />
        <div class="space-y-2">
          <div class="space-y-0">
            <p class="text-xl font-bold">Emanuel Carrero</p>
            <p>Asistente virtual</p>
          </div>
        </div>
      </div>
    </template>
    <div class="p-4 min-h-[250px] max-h-[250px] overflow-y-auto">
      <ul class="space-y-2">
        <li
          class="bg-blue-900 text-white float-left clear-both rounded-br-lg rounded-tr-lg rounded-tl-lg max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl px-4 py-2 my-1 text-sm"
        >
          Hazme una pregunta!
        </li>
        <li
          v-for="(message, index) in messages"
          :key="index"
          :class="
            message.author === 'assistant'
              ? 'bg-blue-900 text-white float-left clear-both rounded-br-lg rounded-tr-lg rounded-tl-lg'
              : 'bg-green-900 text-white float-right clear-both rounded-bl-lg rounded-tl-lg rounded-tr-lg'
          "
          class="max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl px-4 py-2 my-1 text-sm"
        >
          {{ message.content }}
        </li>
        <li
          v-if="isLoading"
          class="bg-blue-900 text-white float-left clear-both rounded-br-lg rounded-tr-lg rounded-tl-lg max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl px-4 py-2 my-1"
        >
          <span class="typing" />
        </li>
      </ul>
    </div>
    <!-- Limpiar floats -->
    <div class="clear-both"></div>
    <template #footer>
      <div class="flex items-center space-x-4">
        <label class="w-full" for="chat">
          <UInput
            id="name"
            v-model="value"
            class="flex-grow placeholder:italic"
            size="sm"
            name="chat"
            :placeholder="useChatSuggestions().content"
            @keyup.enter="sendMessage"
          />
        </label>
        <UButton
          icon="i-heroicons-paper-airplane"
          size="sm"
          color="primary"
          square
          variant="solid"
          @click="sendMessage"
        >
          <span class="sr-only">Enviar mensaje</span>
        </UButton>
      </div>
    </template>
  </UCard>
</template>
