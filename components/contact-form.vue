<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';
import { contactFormSchema } from './contact-form.schema';
import { z } from "zod";

const formData = reactive({
  subject: '',
  email: '',
  numberPhone: '',
  message: ''
})
type Schema = z.output<typeof contactFormSchema>

const onSubmit = (event: FormSubmitEvent<Schema>) => {
  console.log('Form compoennt')
}

</script>
<template>
  <UForm :schema="contactFormSchema" :state="formData" class="space-y-4" @submit="onSubmit">
    <UFormGroup :schema="contactFormSchema" label="Motivo" name="subject" required>
      <UInput v-model="formData.subject" />
    </UFormGroup>
    <UFormGroup label="Email" name="email" required>
      <UInput v-model="formData.email" />
    </UFormGroup>
    <UFormGroup label="Teléfono" name="phone" :required="false">
      <UInput v-model="formData.numberPhone" />
    </UFormGroup>
    <UFormGroup label="Mensaje" name="message" required>
      <UTextarea v-model="formData.message" />
    </UFormGroup>
    <UButton type="submit">
      Enviar
    </UButton>
  </UForm>
</template>
