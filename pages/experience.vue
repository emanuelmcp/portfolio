<script setup lang="ts">
useSeoMeta({
  title: "Experiencia Laboral",
  description:
    "Descubre mi experiencia laboral, incluyendo roles como desarrollador fullstack, desarrollador backend, líder de equipos y programador analista. Mi trayectoria abarca la contribución a soluciones integrales, optimización del lado del servidor y liderazgo en proyectos, con un enfoque siempre analítico y estratégico.",
});

const jobs: Ref<Job[]> = ref([
  {
    id: 1,
    title: "Programador fullstack",
    company: "ARANOVA",
    startMonth: "Septiembre",
    startYear: 2022,
    endMonth: "Junio",
    endYear: 2023,
    description: [
      "Proponer, diseñar y empezar a implementar una arquitectura de microservicios por problemas de escalabilidad y repetición de código, minimizando así la duplicación de código y costes.",
      "Ayudar en la compilación de código legacy hecho en Spring Boot.",
    ],
  },
  {
    id: 2,
    title: "Programador analista (fullstack)",
    company: "ARANOVA",
    startMonth: "Junio",
    startYear: 2023,
    endMonth: "Enero",
    endYear: 2024,
    description: [
      "Diseño y elección adecuada según las necesidades del cliente final de bases de bases de datos (relacionales y no relacionales).",
      "Aplicación de patrones de diseño para alargar la vida útil del software.",
      "Implementación de un flujo de trabajo organizado mediante issues, protección de la rama principal, revisión de pull requests y testing (coverage mínimo aceptable - 80%).",
      "Propuesta y puesta en marcha de un sistema CI/CD mediante github actions.",
      "Implementación del protocolo gRPC para optimizar la comunicación entre microservicios y propiciar el abaratamiento de costes.",
      "Migración de ciertas partes de código a TypeScript para beneficiarse del procesamiento asíncrono proporcionado por la librería de BullMQ. Promover la utilización de NestJS como framework ya que el equipo estaba familiarizado con Spring ayudándoles a reducir la curva de aprendizaje.",
      "Creación de varias librerías para frontend, empezar a utilizar NuxtJS por la familiaridad del equipo con el mismo y por la forma opinionada de desarrollo que tiene este metaframework para mantener una homogeneidad en el código.",
    ],
  },
  {
    id: 3,
    title: "Programador analista senior (backend)",
    company: "INDRA",
    startMonth: "Enero",
    startYear: 2024,
    description: [
      "Dockerizacion de aplicaciones para optimizar los tiempos del onboarding de las aplicaciones y evitar conflictos de versiones.",
      "Resolución de incidencias para garantizar el correcto funcionamiento del software.",
      "Creación de documentación técnica.",
      "Análisis y evaluación de requerimientos para asegurar un desarrollo de software óptimo y a medida de las necesidades del cliente.",
      "Trabajo en equipo.",
    ],
    actually: true,
  },
]);

const sortedJobs = computed(() => jobs.value.sort((a, b) => b.id - a.id));
</script>

<template>
  <ULandingHero
    headline="Page"
    orientation="vertical"
    title="Experiencia laboral"
    :ui="{
      wrapper: 'py-6 sm:py-8 md:py-10 relative',
      title: 'text-left',
      container: 'gap-8 sm:gap-y-12',
      description: 'text-left',
    }"
  >
    <template #description>
      Mi experiencia laboral abarca roles como desarrollador fullstack, desarrollador backend, líder de equipos, y
      programador analista.
      <br />
      He contribuido a la creación de soluciones integrales, gestionado y optimizado la lógica del lado del servidor, y
      liderado proyectos hacia el éxito, siempre con un enfoque analítico y estratégico.
    </template>
    <Timeline :jobs="sortedJobs"></Timeline>
  </ULandingHero>
</template>

<style scoped>
p {
  text-align: left !important;
}
</style>
