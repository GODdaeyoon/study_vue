import { createRouter, createWebHistory } from 'vue-router'
import DataBinding from '../views/DataBinding.vue'
import DataBingingInputText from '../views/DataBingingInputText.vue'
import DataBingingInputNumber from '../views/DataBingingInputNumber.vue'
import DataBingingTextarea from '../views/DataBingingTextarea.vue'
import DataBingingSelect from '../views/DataBingingSelect.vue'
import DataBingingCheckbox from '../views/DataBingingCheckbox.vue'
import DataBingingCheckbox02 from '../views/DataBingingCheckbox02.vue'
import DataBingingRadio from '../views/DataBingingRadio.vue'
import DataBingingAttribue from '../views/DataBingingAttribue.vue'
import DataBingingButton from '../views/DataBingingButton.vue'
import DataBingingClass from '../views/DataBingingClass.vue'
import DataBingingClass2 from '../views/DataBingingClass2.vue'
import DataBingingStyle from '../views/DataBingingStyle.vue'
import DataBingingList from '../views/DataBingingList.vue'
import RenderingVif from '../views/RenderingVif.vue'
import EventClick from '../views/EventClick.vue'
import EventChange from '../views/EventChange.vue'
import Computed from '../views/Computed.vue'
import Watch from '../views/Watch.vue'
import Watch2 from '../views/Watch2.vue'
import DataBingingList02 from '../views/DataBingingList02.vue'

const routes = [
  
  //{
   // path: '/about',
   // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //  component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //},
  {
    path: '/DataBinding',
    name: 'DataBinding',
    component: DataBinding 
  },
  {
    path: '/DataBingingInputText',
    name: 'DataBingingInputText',
    component: DataBingingInputText 
  },
  {
    path: '/DataBingingInputNumber',
    name: 'DataBingingInputNumber',
    component: DataBingingInputNumber 
  },
  {
    path: '/DataBingingTextarea',
    name: 'DataBingingTextarea',
    component: DataBingingTextarea 
  },
  {
    path: '/DataBingingSelect',
    name: 'DataBingingSelect',
    component: DataBingingSelect 
  },
  {
    path: '/DataBingingCheckbox',
    name: 'DataBingingCheckbox',
    component: DataBingingCheckbox 
  },
  {
    path: '/DataBingingCheckbox02',
    name: 'DataBingingCheckbox02',
    component: DataBingingCheckbox02 
  },
  {
    path: '/DataBingingRadio',
    name: 'DataBingingRadio',
    component: DataBingingRadio 
  },
  {
    path: '/DataBingingAttribue',
    name: 'DataBingingAttribue',
    component: DataBingingAttribue 
  },
  {
    path: '/DataBingingButton',
    name: 'DataBingingButton',
    component: DataBingingButton 
  },
  {
    path: '/DataBingingClass',
    name: 'DataBingingClass',
    component: DataBingingClass 
  },
  {
    path: '/DataBingingClass2',
    name: 'DataBingingClass2',
    component: DataBingingClass2 
  },
  {
    path: '/DataBingingStyle',
    name: 'DataBingingStyle',
    component: DataBingingStyle 
  },
  {
    path: '/DataBingingList',
    name: 'DataBingingList',
    component: DataBingingList 
  },
  {
    path: '/RenderingVif',
    name: 'RenderingVif',
    component: RenderingVif 
  },
  {
    path: '/EventClick',
    name: 'EventClick',
    component: EventClick 
  },
  {
    path: '/EventChange',
    name: 'EventChange',
    component: EventChange 
  },
  {
    path: '/Computed',
    name: 'Computed',
    component: Computed 
  },
  {
    path: '/Watch',
    name: 'Watch',
    component: Watch 
  },
  {
    path: '/Watch2',
    name: 'Watch2',
    component: Watch2 
  },
  {
    path: '/DataBingingList02',
    name: 'DataBingingList02',
    component: DataBingingList02 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
