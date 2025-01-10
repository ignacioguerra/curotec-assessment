import type { SurveyQuestionOption } from './SurveyQuestionOption'

export type SurveyQuestionType = 'MULTIPLE_CHOICE' | 'TEXT'

export interface SurveyQuestion {
  id: string
  type: SurveyQuestionType
  displayText: string
  value: string
}

export interface SurveyTextQuestion extends SurveyQuestion {
  type: 'TEXT'
}

export interface SurveyMultipleChoiceQuestion extends SurveyQuestion {
  type: 'MULTIPLE_CHOICE'
  options: SurveyQuestionOption[]
}
