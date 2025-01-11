import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/SurveyListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SurveyList',
      component: HomeView,
    },
    {
      path: '/survey/:surveyId/edit',
      props: true,
      name: 'SurveyEdit',
      component: () => import('../views/SurveyEditView.vue'),
    },
    {
      path: '/survey/:surveyId/take',
      props: true,
      name: 'SurveyTake',
      component: () => import('../views/SurveyTakeView.vue'),
    },
    {
      path: '/survey/:surveyId/results',
      props: true,
      name: 'SurveyResults',
      component: () => import('../views/SurveyResultsView.vue'),
    },
    {
      path: '/create-survey/',
      name: 'SurveyCreate',
      component: () => import('../views/SurveyCreateView.vue'),
    },
  ],
})

export default router
