<script setup lang="ts">
import { useSurveyStore } from '@/stores/survey';
import { computed } from 'vue';

const props = defineProps<{
  surveyId: string;
}>();

const surveyStore = useSurveyStore();
const currentSurvey = computed(() => surveyStore.getSurveyById(props.surveyId));
</script>
<template>
  <div>
    <h1 class="text-xl">{{ currentSurvey?.title }}</h1>
    <p v-if="currentSurvey?.description" class="mb-4">{{ currentSurvey.description }}</p>
    <h2 class="font-bold">Results</h2>
  </div>
</template>
