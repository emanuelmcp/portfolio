<script setup lang="ts">
const links = [
  {
    label: 'Inicio',
    icon: 'i-heroicons-home',
    to: '/'
  }, {
    label: 'Sobre mi',
    icon: 'i-heroicons-information-circle',
    to: '/playground'
  }, {
    label: 'Contacto',
    icon: 'i-heroicons-at-symbol',
    to: '/roadmap'
  }
]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <Logo>
        <div class="flex items-center flex-row-reverse">
          <h1 class="ml-3">Emanuel Carrero</h1>
          <NuxtImg src="logo.png" class="w-auto h-12" />
        </div>
      </Logo>
    </template>
  </UHeader>
  <UMain>
    <UContainer>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UContainer>
    <UFooter>
      <template #left>
        Emanuel Carrero © {{ new Date().getFullYear() }}
      </template>
      <template #right>
        <UButton icon="i-simple-icons-linkedin" color="gray" variant="ghost"
          to="https://www.linkedin.com/in/emanuel-carrero/" target="_blank" />
        <UButton icon="i-simple-icons-github" color="gray" variant="ghost" to="https://github.com/emanuelmcp"
          target="_blank" />
      </template>
    </UFooter>
  </UMain>
  <UFooter />
</template>
