<script setup lang="ts">
const subject = defineModel('subject', { default: '', local: true, required: true })
const email = defineModel('email', { default: '', local: true, required: true })
const numberPhone = defineModel('numberPhone', { default: '', local: true, required: true })
const message = defineModel('message', { default: '', local: true, required: true })
</script>

<template>
  <UForm :state="{
    subject,
    email,
    numberPhone,
    message
  }" class="space-y-4" @submit.prevent="$emit('submitted')">
    <UFormGroup label="Motivo" name="subject" required>
      <UInput v-model="subject" />
    </UFormGroup>
    <UFormGroup label="Email" name="email" required>
      <UInput v-model="email" />
    </UFormGroup>
    <UFormGroup label="Teléfono" name="phone" :required="false">
      <UInput v-model="numberPhone" />
    </UFormGroup>
    <UFormGroup label="Mensaje" name="message" required>
      <UTextarea v-model="message" />
    </UFormGroup>
    <UButton type="submit">
      Enviar
    </UButton>
  </UForm>
</template>

<style scoped></style>