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
import nestedcomponent from '../views/nestedcomponent.vue'
import childcomponent from '../views/childcomponent.vue'
import childcomponent2 from '../views/childcomponent2.vue'
import childcomponent3 from '../views/childcomponent3.vue'
import childcomponent4 from '../views/childcomponent4.vue'
import childcomponent5 from '../views/childcomponent5.vue'
import parentcomponent from '../views/parentcomponent.vue'
import parentcomponent2 from '../views/parentcomponent2.vue'
import parentcomponent3 from '../views/parentcomponent3.vue'
import parentcomponent4 from '../views/parentcomponent4.vue'
import parentcomponent5 from '../views/parentcomponent5.vue'
import SlotModalLayout from '../views/SlotModalLayout.vue'
import SlotUseModalLayout from '../views/SlotUseModalLayout.vue'
import ProvideInject from '../views/ProvideInject.vue'
import Calculator from '../views/Calculator.vue'
import CompositionAPI from '../views/CompositionAPI.vue'
import CompositionAPI2 from '../views/CompositionAPI2.vue'
import CompositionAPI3 from '../views/CompositionAPI3.vue'
import CompositionAPI4 from '../views/CompositionAPI4.vue'
import CompositionAPIInject from '../views/CompositionAPIInject.vue'
import CompositionAPIProvide from '../views/CompositionAPIProvide.vue'
import mixins from '../views/mixins.vue'
import CustomDirective from '../views/CustomDirective.vue'
import Plugins from '../views/Plugins.vue'


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
  {
    path: '/nestedcomponent',
    name: 'nestedcomponent',
    component: nestedcomponent 
  },
  {
    path: '/childcomponent',
    name: 'childcomponent',
    component: childcomponent 
  },
  {
    path: '/childcomponent2',
    name: 'childcomponent2',
    component: childcomponent2
  },
  {
    path: '/childcomponent3',
    name: 'childcomponent3',
    component: childcomponent3 
  },
  {
    path: '/childcomponent4',
    name: 'childcomponent4',
    component: childcomponent4 
  },
  {
    path: '/childcomponent5',
    name: 'childcomponent5',
    component: childcomponent5 
  },
  {
    path: '/parentcomponent',
    name: 'parentcomponent',
    component: parentcomponent 
  },
  {
    path: '/parentcomponent2',
    name: 'parentcomponent2',
    component: parentcomponent2 
  },
  {
    path: '/parentcomponent3',
    name: 'parentcomponent3',
    component: parentcomponent3 
  },
  {
    path: '/parentcomponent4',
    name: 'parentcomponent4',
    component: parentcomponent4 
  },
  {
    path: '/parentcomponent5',
    name: 'parentcomponent5',
    component: parentcomponent5
  },
  {
    path: '/SlotModalLayout',
    name: 'SlotModalLayout',
    component: SlotModalLayout
  },
  {
    path: '/SlotUseModalLayout',
    name: 'SlotUseModalLayout',
    component: SlotUseModalLayout
  },
  {
    path: '/ProvideInject',
    name: 'ProvideInject',
    component: ProvideInject
  },
  {
    path: '/Calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/CompositionAPI',
    name: 'CompositionAPI',
    component: CompositionAPI
  },
  {
    path: '/CompositionAPI2',
    name: 'CompositionAPI2',
    component: CompositionAPI2
  },
  {
    path: '/CompositionAPI3',
    name: 'CompositionAPI3',
    component: CompositionAPI3
  },
  {
    path: '/CompositionAPI4',
    name: 'CompositionAPI4',
    component: CompositionAPI4
  },
  {
    path: '/CompositionAPIProvide',
    name: 'CompositionAPIProvide',
    component: CompositionAPIProvide
  },
  {
    path: '/CompositionAPIInject',
    name: 'CompositionAPIInject',
    component: CompositionAPIInject
  },
  {
    path: '/mixins',
    name: 'mixins',
    component: mixins
  },
  {
    path: '/CustomDirective',
    name: 'CustomDirective',
    component: CustomDirective
  },
  {
    path: '/Plugins',
    name: 'Plugins',
    component: Plugins
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
