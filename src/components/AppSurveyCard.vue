<script setup lang="ts">
import type { Survey } from '@/models/Survey';
import router from '@/router';
import QrcodeVue from 'qrcode.vue'

defineProps<{
  survey: Survey;
}>();

const createSurveyUrl = (surveyId: string) => {
  return router.resolve({ name: 'SurveyTake', params: { surveyId } }).fullPath;
}
</script>
<template>
  <div class="bg-gray-800 p-4 rounded-md">
    <h2 class="text-lg font-bold">{{ survey.title }}</h2>
    <p>{{ survey.description }}</p>
    <p class="mb-2">Questions: {{ survey.questions.length }}</p>
    <div class="bg-white p-2 rounded-md">
      <qrcode-vue :value="createSurveyUrl(survey.id)"></qrcode-vue>
    </div>
  </div>
</template>
