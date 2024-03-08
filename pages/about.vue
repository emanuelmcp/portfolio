<script setup lang="ts">
useSeoMeta({
  title: "Sobre mí",
  description:
    "Explora la carrera de Emanuel Carrero, un desarrollador fullstack con experiencia, y su asistente virtual que muestra su habilidad y enfoque en soluciones web innovadoras y eficientes.",
});
</script>
<template>
  <ULandingHero headline="Page" orientation="horizontal" title="Sobre mí">
    <template #description>
      Antes de nuestra primera entrevista o solicitud, te invito a interactuar con mi asistente virtual avanzado.
      <br />
      Esta herramienta de IA, alimentada con detalles exhaustivos sobre mi trayectoria y habilidades de desarrollo
      fullstack, está diseñada para ofrecerte una visión completa de mi experiencia y enfoque de trabajo. Es una
      excelente oportunidad para descubrir cómo puedo aportar valor a tu proyecto con mi especialización técnica.
    </template>
    <ChatGpt></ChatGpt>
  </ULandingHero>
</template>
