<script setup lang="ts">
import emailjs from '@emailjs/browser';

emailjs.init('-tWHTNZ51_rc1QH_f')

const submitted = () => {
  console.log('Hola')
}
</script>

<template>
  <ULandingHero title="Ponte en contacto conmigo" orientation="horizontal"
    description="¿Listo para llevar tu proyecto al siguiente nivel? Conéctate conmigo para descubrir soluciones de desarrollo web a medida que se alinean perfectamente con tus necesidades. Ya sea una consulta, un proyecto potencial o una colaboración, estoy aquí para responder tus preguntas y ayudarte a alcanzar tus objetivos. Utiliza el formulario a continuación o los detalles de contacto para iniciar una conversación que podría transformar tu visión en realidad digital. Estoy a solo un mensaje de distancia."
    align="left">
    <ContactForm @submitted="submitted" />
  </ULandingHero>
</template>
