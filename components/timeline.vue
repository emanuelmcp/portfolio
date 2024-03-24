<script setup lang="ts">
interface Props {
  jobs: Job[];
}

defineProps<Props>();
</script>
<template>
  <ol class="relative border-s border-gray-200 dark:border-gray-700">
    <li v-for="job in jobs" :key="job.id" class="mb-10 ms-4">
      <div
        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
      ></div>
      <time class="mb-1 text-sm font-normal leading-none text-gray-300 dark:text-gray-400"
        >{{ job.month }} {{ job.year }}{{ job.actually ? " - Actualmente" : "" }}</time
      >
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">{{ job.title }}</h2>
      <ol class="list-disc relative">
        <li v-for="(task, idx) in job.description" :key="idx" class="mb-2 ms-4">
          {{ task }}
        </li>
      </ol>
    </li>
  </ol>
</template>
