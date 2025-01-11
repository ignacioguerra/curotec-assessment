<script setup lang="ts">
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
      <div v-for="survey in surveys" :key="survey.id" class="bg-gray-800 p-4 rounded-md">
        <div>
          <h2 class="text-lg font-bold">{{ survey.title }}</h2>
          <p>{{ survey.description }}</p>
          <p>Questions: {{ survey.questions.length }}</p>
        </div>
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
      </div>
      <div>
        <RouterLink :to="{ name: 'SurveyCreate' }"
          class="px-4 py-2 bg-blue-500 text-white rounded-md mt-2 inline-block">
          Create a new Survey</RouterLink>
      </div>
    </div>
  </div>
</template>
