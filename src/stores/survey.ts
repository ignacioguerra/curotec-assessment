import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { SurveyQuestionType } from '@/models/SurveyQuestion'

export const useSurveyStore = defineStore('survey', () => {
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

  return { createEmptyQuestion }
})
