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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
