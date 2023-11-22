<script setup lang="ts">
useSeoMeta({
  title: 'Inicio',
  description: 'Emanuel Carrero - Freelancer fullstack',
})
</script>

<template>
  <UPageHero
    description="Descubre cómo la destreza en fullstack puede revolucionar tu negocio. Soy un desarrollador fullstack con un historial comprobado de construcción de aplicaciones web que son tan robustas como intuitivas. Especializado en tecnologías modernas de frontend y backend, ofrezco soluciones que no solo cumplen, sino que superan las expectativas de rendimiento y usabilidad. Este portafolio demuestra mi compromiso con la excelencia en desarrollo web, la arquitectura de software eficiente y la creación de experiencias de usuario inolvidables. Con cada proyecto, tu visión se convierte en una aplicación web funcional y estéticamente agradable que impulsa el crecimiento."
    align="left" :links="[
      { label: 'Sobre mi', icon: '', color: 'green', size: 'lg', to: '/about' },
      { label: 'Contáctame', color: 'gray', size: 'lg', trailingIcon: 'i-heroicons-arrow-right-20-solid', to: '/contact' }
    ]">
    <template #title>
      <h2>Experto en Desarrollo Fullstack</h2>
    </template>
    <img height="592" alt="Emanuel Carrero" format="webp" src="emanuel-carrero.webp"
      class="rounded-md object-scale-down h-592" />
  </UPageHero>
  <UPage>
    <TechSkills />
  </UPage>
</template>

