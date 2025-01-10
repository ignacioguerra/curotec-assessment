import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { SurveyQuestionType } from '@/models/SurveyQuestion'
import type { Survey } from '@/models/Survey'

export const useSurveyStore = defineStore('survey', () => {
  const surveys = ref<Survey[]>([])

  const addSurvey = (survey: Survey) => {
    surveys.value.push(survey)
  }

  const createEmptyQuestion = (type: SurveyQuestionType) => {
    const id = crypto.randomUUID()
    const additionalPropsByType = {
      TEXT: {},
      MULTIPLE_CHOICE: { options: [] },
    }
    const additionalProps = additionalPropsByType[type]

    return {
      id,
      type,
      displayText: '',
      value: '',
      ...additionalProps,
    }
  }

  return { surveys, addSurvey, createEmptyQuestion }
})
