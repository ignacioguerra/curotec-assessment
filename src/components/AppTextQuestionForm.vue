<script setup lang="ts">
import AppFormTextField from './AppFormTextField.vue';

defineProps<{
  questionIndex: number;
}>();
const displayTextModel = defineModel<string>('displayText');
const emits = defineEmits(['remove']);

const removeQuestion = () => {
  emits('remove');
}
</script>
<template>
  <div class="p-2 border border-gray-800 rounded-md">
    <AppFormTextField v-model="displayTextModel" :labelText="`Question ${questionIndex}`" />
    <button type="button" class="px-4 py-2 bg-red-500 text-white rounded-md" @click="removeQuestion()">Remove
      Question</button>
  </div>
</template>
