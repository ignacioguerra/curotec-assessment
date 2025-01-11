<script setup lang="ts">
import AppFormTextField from '@/components/AppFormTextField.vue';
import type { Survey } from '@/models/Survey';
import { useSurveyStore } from '@/stores/survey';
import { computed, ref } from 'vue';

const props = defineProps<{
  surveyId: string;
}>();

const surveyStore = useSurveyStore();

const currentSurvey = computed(() => surveyStore.getSurveyById(props.surveyId));
const answers = ref<string[]>([]);
const survey = ref<Survey>({ ...currentSurvey.value } as Survey);

const send = () => {
  // TODO: Store the answers
}
</script>
<template>
  <div>
    <h1 class="text-xl">{{ currentSurvey?.title }}</h1>
    <p v-if="currentSurvey?.description" class="mb-4">{{ currentSurvey.description }}</p>
    <form @submit.prevent="send">
      <AppFormTextField v-for="(question, index) in survey.questions" :key="question.id" v-model="answers[index]"
        :labelText="question.displayText" />
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md">Send</button>
    </form>
  </div>
</template>
