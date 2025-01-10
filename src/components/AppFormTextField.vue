<script setup lang="ts">
defineProps<{
  labelText: string;
  required?: boolean;
}>();
const model = defineModel<string>();
</script>
<template>
  <div class="mb-4">
    <label for="description" class="block text-sm font-medium text-gray-400">{{ labelText }}</label>
    <input v-model="model" type="text" class="mt-1 block w-full bg-gray-800 rounded-md p-2" :required="required" />
  </div>
</template>
