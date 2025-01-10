<script setup lang="ts">
import type { SurveyMultipleChoiceQuestion } from '@/models/SurveyQuestion';
import type { SurveyQuestionOption } from '@/models/SurveyQuestionOption';

defineProps<{
  questionIndex: number;
}>();
const displayTextModel = defineModel<string>('displayText');
const optionsModel = defineModel<SurveyQuestionOption[]>('options');
const emits = defineEmits(['remove']);

const removeQuestion = () => {
  emits('remove');
}
</script>
<template>
  <div class="p-2 border border-gray-800 rounded-md">
    <AppFormTextField v-model="displayTextModel" :labelText="`Question ${questionIndex}`" />
    <div class="grid grid-cols-2 gap-4">
      <!-- <AppFormTextField v-for="option in question.options" :key="option.id" v-model="option" -->
      <!-- labelText="Option 1" /> -->
      <button type="button" class="px-4 py-2 bg-gray-800 text-white rounded-md">Add Option</button>
    </div>
    <button type="button" class="px-4 py-2 bg-red-500 text-white rounded-md" @click="removeQuestion()">Remove
      Question</button>
  </div>
</template>
