import type { SurveyQuestion } from './SurveyQuestion'

export interface Survey {
  id: string
  title: string
  description?: string
  questions: SurveyQuestion[]
}
