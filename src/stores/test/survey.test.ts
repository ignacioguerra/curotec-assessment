import { setActivePinia, createPinia } from 'pinia'
import { useSurveyStore } from '../survey'
import { describe, it, expect, beforeEach } from 'vitest'
import type { Survey } from '@/models/Survey'
import type { SurveyQuestionType } from '@/models/SurveyQuestion'

describe('Survey Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should add a survey', () => {
    const store = useSurveyStore()
    const survey: Survey = {
      id: '1',
      title: 'Test Survey',
      description: 'Description',
      questions: [],
    }
    store.addSurvey(survey)
    expect(store.surveys).toContainEqual(survey)
  })

  it('should delete a survey', () => {
    const store = useSurveyStore()
    const survey: Survey = {
      id: '1',
      title: 'Test Survey',
      description: 'Description',
      questions: [],
    }
    store.addSurvey(survey)
    store.deleteSurvey('1')
    expect(store.surveys).not.toContainEqual(survey)
  })

  it('should update a survey', () => {
    const store = useSurveyStore()
    const survey: Survey = {
      id: '1',
      title: 'Test Survey',
      description: 'Description',
      questions: [],
    }
    store.addSurvey(survey)
    const updatedSurvey: Survey = {
      id: '1',
      title: 'Updated Survey',
      description: 'Updated Description',
      questions: [],
    }
    store.updateSurvey(updatedSurvey)
    expect(store.surveys[0]).toEqual(updatedSurvey)
  })

  it('should throw an error when updating a non-existent survey', () => {
    const store = useSurveyStore()
    const survey: Survey = {
      id: '1',
      title: 'Test Survey',
      description: 'Description',
      questions: [],
    }
    expect(() => store.updateSurvey(survey)).toThrowError(`Survey with id ${survey.id} not found`)
  })

  it('should create an empty survey', () => {
    const store = useSurveyStore()
    const emptySurvey = store.createEmptySurvey()
    expect(emptySurvey).toHaveProperty('id')
    expect(emptySurvey.title).toBe('')
    expect(emptySurvey.description).toBe('')
    expect(emptySurvey.questions).toEqual([])
  })

  it('should create an empty question', () => {
    const store = useSurveyStore()
    const questionType: SurveyQuestionType = 'TEXT'
    const emptyQuestion = store.createEmptyQuestion(questionType)
    expect(emptyQuestion).toHaveProperty('id')
    expect(emptyQuestion.type).toBe(questionType)
    expect(emptyQuestion.displayText).toBe('')
    expect(emptyQuestion.value).toBe('')
  })

  it('should get a survey by id', () => {
    const store = useSurveyStore()
    const survey: Survey = {
      id: '1',
      title: 'Test Survey',
      description: 'Description',
      questions: [],
    }
    store.addSurvey(survey)
    const fetchedSurvey = store.getSurveyById('1')
    expect(fetchedSurvey).toEqual(survey)
  })

  it('should return undefined for non-existent survey id', () => {
    const store = useSurveyStore()
    const fetchedSurvey = store.getSurveyById('non-existent-id')
    expect(fetchedSurvey).toBeUndefined()
  })
})
