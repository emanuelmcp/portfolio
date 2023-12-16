<script setup lang="ts">
useSeoMeta({
  title: "Inicio",
  description:
    "Emanuel Carrero: experto en desarrollo fullstack, enfocado en front-end y back-end, crea aplicaciones web robustas y eficientes, con énfasis en la experiencia de usuario y transformación de ideas en soluciones de negocio.",
});
</script>

<template>
  <ULandingHero
    orientation="horizontal"
    :ui="{ wrapper: 'md:py-20' }"
    description="Descubre cómo la destreza en fullstack puede revolucionar tu negocio. Soy un desarrollador fullstack con un historial comprobado de construcción de aplicaciones web que son tan robustas como intuitivas. Especializado en tecnologías modernas de frontend y backend, ofrezco soluciones que no solo cumplen, sino que superan las expectativas de rendimiento y usabilidad. Este portafolio demuestra mi compromiso con la excelencia en desarrollo web, la arquitectura de software eficiente y la creación de experiencias de usuario inolvidables. Con cada proyecto, tu visión se convierte en una aplicación web funcional y estéticamente agradable que impulsa el crecimiento."
    title="Desarrollador Fullstack"
    align="left"
    :links="[
      { label: 'Sobre mi', icon: '', color: 'green', size: 'lg', to: '/about' },
      {
        label: 'Contáctame',
        color: 'gray',
        size: 'lg',
        trailingIcon: 'i-heroicons-arrow-right-20-solid',
        to: '/contact',
      },
    ]"
  >
    <div class="hidden lg:block px-4">
      <NuxtImg height="592" width="498" alt="Emanuel Carrero" format="webp" src="emanuel-carrero.webp" />
    </div>
  </ULandingHero>
  <UPage>
    <TechSkills />
  </UPage>
</template>
