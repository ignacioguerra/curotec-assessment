<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container mx-auto p-4">
    <header class="border-b border-gray-600 pb-2 mb-8">
      <p>Curotec Technical Assessment</p>
      <nav class="flex space-x-4 mt-2">
        <RouterLink to="/" class="text-blue-500 hover:text-blue-700">Home</RouterLink>
        <RouterLink to="/create-survey/" class="text-blue-500 hover:text-blue-700">Create Survey</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>
