<script setup lang="ts">
const links = [
  {
    label: "Inicio",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "Experiencia",
    icon: "i-heroicons-information-circle",
    to: "/experience",
  },
  {
    label: "Sobre mi",
    icon: "i-heroicons-information-circle",
    to: "/about",
  },
  {
    label: "Contacto",
    icon: "i-heroicons-at-symbol",
    to: "/contact",
  },
];
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <UHeader :links="links">
      <template #logo>
        <div class="flex items-center flex-row-reverse">
          <!-- <NuxtLink to="/" class="ml-3" aria-label="Ir al inicio de Emanuel Carrero">Inicio</NuxtLink> -->
          <NuxtImg
            format="webp"
            width="48"
            height="48"
            alt="Ir al inicio - Logo de Emanuel Carrero"
            src="logo.png"
            class="w-auto h-12"
          />
        </div>
      </template>
    </UHeader>
    <UMain
      :ui="{
        wrapper: 'min-h-[calc(100vh-var(--header-height)-var(--footer-height))] flex-grow',
      }"
    >
      <UContainer>
        <NuxtPage></NuxtPage>
      </UContainer>
    </UMain>
    <UNotifications />
    <UDivider />
    <UFooter>
      <template #left> Emanuel Carrero © {{ new Date().getFullYear() }} </template>
      <template #right>
        <UButton
          icon="i-simple-icons-linkedin"
          color="gray"
          variant="ghost"
          aria-label="Linkedin de Emanuel Carrero"
          to="https://www.linkedin.com/in/emanuel-carrero/"
          target="_blank"
        />
        <UButton
          icon="i-simple-icons-x"
          color="gray"
          variant="ghost"
          aria-label="X de Emanuel Carrero"
          to="https://x.com/racedevweb"
          target="_blank"
        />
        <UButton
          icon="i-simple-icons-github"
          color="gray"
          variant="ghost"
          aria-label="Github de Emanuel Carrero"
          to="https://github.com/emanuelmcp"
          target="_blank"
        />
      </template>
    </UFooter>
  </div>
</template>
