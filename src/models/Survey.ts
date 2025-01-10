import type { SurveyQuestion } from './SurveyQuestion'

export interface Survey {
  title: string
  description: string
  questions: SurveyQuestion[]
}
