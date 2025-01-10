import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/surveys',
      name: 'SurveyList',
      component: () => import('../views/SurveyListView.vue'),
    },
    {
      path: '/surveys/:id',
      name: 'SurveyDetail',
      component: () => import('../views/SurveyDetailView.vue'),
    },
    {
      path: '/survey/:id/edit',
      name: 'SurveyEdit',
      component: () => import('../views/SurveyEditView.vue'),
    },
    {
      path: '/surveys/:id/take',
      name: 'SurveyTake',
      component: () => import('../views/SurveyTakeView.vue'),
    },
    {
      path: '/surveys/:id/results',
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
