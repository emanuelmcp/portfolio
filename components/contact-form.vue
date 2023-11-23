<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';
import { contactFormSchema } from './contact-form.schema';
import { z } from "zod";
import emailjs from "@emailjs/browser"

emailjs.init("OrkN_3XddhUHDig01");
const toast = useToast()

let formData = reactive({
  subject: '',
  email: '',
  numberPhone: '',
  message: ''
})
type Schema = z.output<typeof contactFormSchema>

const onSubmit = (event: FormSubmitEvent<Schema>) => {
  //toast.add({ title: 'Email enviado!' })
  formData = reactive({
    subject: '',
    email: '',
    numberPhone: '',
    message: ''
  })
  const { data } = event;
  emailjs.send('service_kwscmbw', 'template_ru1j11p', {
    subject: data.subject,
    phone: data.numberPhone,
    reply_to: data.email,
    message: data.message
  })
    .then(function (response) {
      if (response.status != 200) toast.add({ title: 'Error, inténtelo más tarde', color: 'red' })
      else toast.add({ title: 'Email enviado!' })
    }, function (error) {
      toast.add({ title: 'Error, inténtelo más tarde', color: 'red' })
    });
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
