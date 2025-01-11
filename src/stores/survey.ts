import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { SurveyQuestionType } from '@/models/SurveyQuestion'
import type { Survey } from '@/models/Survey'

export const useSurveyStore = defineStore('survey', () => {
  const surveys = ref<Survey[]>([])

  const addSurvey = (survey: Survey) => {
    surveys.value.push(survey)
  }
  const deleteSurvey = (surveyId: string) => {
    surveys.value = surveys.value.filter((survey) => survey.id !== surveyId)
  }
  const updateSurvey = (survey: Survey) => {
    const index = surveys.value.findIndex((s) => s.id === survey.id)
    if (index === -1) {
      throw new Error(`Survey with id ${survey.id} not found
      `)
    }
    surveys.value[index] = survey
  }
  const createEmptySurvey = () => {
    const id = crypto.randomUUID()
    return {
      id,
      title: '',
      description: '',
      questions: [],
    }
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
  const getSurveyById = (surveyId: string) => {
    return surveys.value.find((survey) => survey.id === surveyId)
  }

  return {
    surveys,
    addSurvey,
    updateSurvey,
    deleteSurvey,
    createEmptySurvey,
    createEmptyQuestion,
    getSurveyById,
  }
})
