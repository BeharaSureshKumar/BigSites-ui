import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import AgentAccountView from '@/views/agent/AgentAccountView.vue'
import AgentProfilesView from '@/views/agent/AgentProfilesView.vue'
import CommissionDueView from '@/views/agent/CommissionDueView.vue'
import ResumeView from '@/views/jobseeker/ResumeView.vue'
import OfferView from '@/views/jobseeker/OfferView.vue'
import IntstatusView from '@/views/jobseeker/IntstatusView.vue'
import ConfirmView from '@/views/jobseeker/ConfirmView.vue'
import EmployerAccountView from '@/views/employer/EmployerAccountView.vue'
import SecuroPublishView from '@/views/employer/SecuroPublishView.vue'
import SecuroDointerview from '@/views/employer/SecuroDointerview.vue'
import SecuroMyaccountView from '@/views/employer/SecuroMyaccountView.vue'
import SecuroProfAppliedView from '@/views/employer/SecuroProfAppliedView.vue'
import SecuroProfilesSelectedView from '@/views/employer/SecuroProfilesSelectedView.vue'
import SecuroProfilesAppointedView from '@/views/employer/SecuroProfilesAppointedView.vue'
import SecuroScheduleView from '@/views/employer/SecuroScheduleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView,
    },
    {
      path: '/agent/myaccount',
      name: 'myacct',
      component: AgentAccountView,
    },
    {
      path: '/agent/profview',
      name: 'profview',
      component: AgentProfilesView,
    },
    {
      path: '/agent/commissiondue',
      name: 'commissiondue',
      component: CommissionDueView,
    },
    {
      path: '/jobseeker/details',
      name: 'resume',
      component: ResumeView,
    },
   
    {
      path: '/jobseeker/offer',
      name: 'offer',
      component: OfferView,
    },
    {
      path: '/jobseeker/intstatus',
      name: 'intstatus',
      component: IntstatusView,
    },
    {
      path: '/jobseeker/confirm',
      name: 'confirm',
      component: ConfirmView,
    },
   
     {
      path: '/employer/jdpost',
      name: 'jdpost',
      component: EmployerAccountView,
    },
    {
      path: '/employer/publish',
      name: 'publish',
      component: SecuroPublishView,
    },
    // {
    //   path: '/employer/jobseeker',
    //   name: 'empjobseeker',
    //   component: SecuroJobseekerView,
    // },
    {
      path: '/employer/dointerview',
      name: 'dointerview',
      component: SecuroDointerview,
    },
    {
      path: '/employer/myaccount',
      name: 'employeemyaccount',
      component: SecuroMyaccountView,
    },
    {
      path: '/employer/profapplied',
      name: 'profapplied',
      component: SecuroProfAppliedView,
    },
{
      path: '/employeer/profselcted',
      name: 'profconf1',
      component: SecuroProfilesSelectedView,
    },
    {
      path: '/employeer/profappt',
      name: 'profappt',
      component: SecuroProfilesAppointedView,
    },
    {
      path: '/employer/schedulelist',
      name: 'jobseekers',
      component: SecuroScheduleView,
    },
  ],
})

export default router
