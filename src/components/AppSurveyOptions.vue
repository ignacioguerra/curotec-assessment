<script setup lang="ts">
import type { Survey } from '@/models/Survey';

defineProps<{
  survey: Survey;
}>();

const emits = defineEmits(['delete']);

const deleteSurvey = (surveyId: string) => {
  emits('delete', surveyId);
}
</script>
<template>
  <div class="flex gap-2">
    <RouterLink :to="{ name: 'SurveyEdit', params: { surveyId: survey.id } }"
      class="px-4 py-2 bg-gray-500 text-white rounded-md mt-2 inline-block">Edit Survey</RouterLink>
    <button type="button" class="px-4 py-2 bg-red-500 text-white rounded-md mt-2 inline-block"
      @click="deleteSurvey(survey.id)">Delete Survey</button>
    <router-link :to="{ name: 'SurveyTake', params: { surveyId: survey.id } }"
      class="px-4 py-2 bg-blue-500 text-white rounded-md mt-2 inline-block">Take Survey</router-link>
    <RouterLink :to="{ name: 'SurveyResults', params: { surveyId: survey.id } }"
      class="px-4 py-2 bg-green-500 text-white rounded-md mt-2 inline-block">View Results</RouterLink>
  </div>
</template>
