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
    description="Desarrollador fullstack especializado en tecnologías modernas, con experiencia en la creación de aplicaciones web robustas que superan expectativas. Comprometido con la excelencia en desarrollo web para impulsar el crecimiento empresarial a través de experiencias de usuario inolvidables."
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
