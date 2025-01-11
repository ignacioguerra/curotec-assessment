<script setup lang="ts">
import { VueDraggableNext as draggable } from 'vue-draggable-next'
import AppFormTextField from '@/components/AppFormTextField.vue';
import AppTextQuestionForm from '@/components/AppTextQuestionForm.vue';
import type { Survey } from '@/models/Survey';
import type { SurveyQuestion, SurveyTextQuestion } from '@/models/SurveyQuestion';
import router from '@/router';
import { useSurveyStore } from '@/stores/survey';
import { ref } from 'vue';

const surveyStore = useSurveyStore();

const survey = ref<Survey>(surveyStore.createEmptySurvey());
const errorMessage = ref<string | null>(null);

const createSurvey = () => {
  errorMessage.value = null;
  if (!survey.value.title || survey.value.questions.length === 0) {
    errorMessage.value = 'Please fill out all fields';
    return;
  }
  surveyStore.addSurvey(survey.value);
  router.push({ name: 'SurveyList' });
}
const addTextQuestion = () => {
  const question: SurveyQuestion = surveyStore.createEmptyQuestion('TEXT') as SurveyTextQuestion;
  survey.value.questions.push(question);
}
const removeQuestion = (questionId: string) => {
  survey.value.questions = survey.value.questions.filter((question) => question.id !== questionId);
}
</script>
<template>
  <div>
    <h1 class="mb-4 text-xl">Create new Survey</h1>
    <div v-if="errorMessage" class="bg-red-500 text-white p-2 rounded-md mb-4">{{ errorMessage }}</div>
    <form @submit.prevent="createSurvey">
      <div class="grid grid-cols-2 gap-4">
        <AppFormTextField v-model="survey.title" labelText="Title" required />
        <AppFormTextField v-model="survey.description" labelText="Description" />
      </div>
      <div class="mb-6 pb-3 border-b border-gray-800">
        <h2 class="font-bold">Questions</h2>
        <draggable class="my-2 flex flex-col gap-2 dragArea list-group w-full" :list="survey.questions">
          <div v-for="(question, index) in survey.questions" :key="question.id">
            <AppTextQuestionForm v-model:displayText="question.displayText" :questionIndex="index + 1"
              @remove="removeQuestion(question.id)" />
          </div>
        </draggable>
        <div class="flex gap-4">
          <button type="button" class="px-4 py-2 bg-gray-800 text-white rounded-md" @click="addTextQuestion">Add Text
            Question</button>
        </div>
      </div>
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md">Save Survey</button>
    </form>
  </div>
</template>
