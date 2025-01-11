<script setup lang="ts">
import AppSurveyCard from '@/components/AppSurveyCard.vue';
import AppSurveyOptions from '@/components/AppSurveyOptions.vue';
import { useSurveyStore } from '@/stores/survey';
import { computed } from 'vue';


const surveyStore = useSurveyStore();
const surveys = computed(() => surveyStore.surveys);

const deleteSurvey = (surveyId: string) => {
  surveyStore.deleteSurvey(surveyId);
}

</script>

<template>
  <div>
    <h1 class="mb-4 text-xl">Surveys</h1>
    <div class="flex flex-col gap-4">
      <div v-if="surveys.length === 0">
        <p class="bg-gray-800 p-4 rounded-md">No surveys available</p>
      </div>
      <div v-for="survey in surveys" :key="survey.id">
        <AppSurveyCard :survey="survey" />
        <AppSurveyOptions :survey="survey" @delete="deleteSurvey(survey.id)" />
      </div>
      <div>
        <RouterLink :to="{ name: 'SurveyCreate' }"
          class="px-4 py-2 bg-blue-500 text-white rounded-md mt-2 inline-block">
          Create a new Survey</RouterLink>
      </div>
    </div>
  </div>
</template>
