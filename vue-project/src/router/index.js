import { createRouter, createWebHistory } from 'vue-router'



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
    component: () => import(/* webpackChunkName: "DataBinding" */ '../views/DataBinding.vue')
  },
  {
    path: '/DataBingingInputText',
    name: 'DataBingingInputText',
    component: () => import(/* webpackChunkName: "DataBingingInputText" */ '../views/DataBingingInputText.vue')
  },
  {
    path: '/DataBingingInputNumber',
    name: 'DataBingingInputNumber',
    component: () => import(/* webpackChunkName: "DataBingingInputNumber" */ '../views/DataBingingInputNumber.vue')
  },
  {
    path: '/DataBingingTextarea',
    name: 'DataBingingTextarea',
    component: () => import(/* webpackChunkName: "DataBingingTextarea" */ '../views/DataBingingTextarea.vue')
  },
  {
    path: '/DataBingingSelect',
    name: 'DataBingingSelect',
    component: () => import(/* webpackChunkName: "DataBingingSelect" */ '../views/DataBingingSelect.vue')
  },
  {
    path: '/DataBingingCheckbox',
    name: 'DataBingingCheckbox',
    component: () => import(/* webpackChunkName: "DataBingingCheckbox" */ '../views/DataBingingCheckbox.vue')
  },
  {
    path: '/DataBingingCheckbox02',
    name: 'DataBingingCheckbox02',
    component: () => import(/* webpackChunkName: "DataBingingCheckbox02" */ '../views/DataBingingCheckbox02.vue')
  },
  {
    path: '/DataBingingRadio',
    name: 'DataBingingRadio',
    component: () => import(/* webpackChunkName: "DataBingingRadio" */ '../views/DataBingingRadio.vue')
  },
  {
    path: '/DataBingingAttribue',
    name: 'DataBingingAttribue',
    component: () => import(/* webpackChunkName: "DataBingingAttribue" */ '../views/DataBingingAttribue.vue')
  },
  {
    path: '/DataBingingButton',
    name: 'DataBingingButton',
    component: () => import(/* webpackChunkName: "DataBingingButton" */ '../views/DataBingingButton.vue')
  },
  {
    path: '/DataBingingClass',
    name: 'DataBingingClass',
    component: () => import(/* webpackChunkName: "DataBingingClass" */ '../views/DataBingingClass.vue')
  },
  {
    path: '/DataBingingClass2',
    name: 'DataBingingClass2',
    component: () => import(/* webpackChunkName: "DataBingingClass2" */ '../views/DataBingingClass2.vue')
  },
  {
    path: '/DataBingingStyle',
    name: 'DataBingingStyle',
    component: () => import(/* webpackChunkName: "DataBingingStyle" */ '../views/DataBingingStyle.vue')
  },
  {
    path: '/DataBingingList',
    name: 'DataBingingList',
    component: () => import(/* webpackChunkName: "DataBingingList" */ '../views/DataBingingList.vue')
  },
  {
    path: '/RenderingVif',
    name: 'RenderingVif',
    component: () => import(/* webpackChunkName: "RenderingVif" */ '../views/RenderingVif.vue')
  },
  {
    path: '/EventClick',
    name: 'EventClick',
    component: () => import(/* webpackChunkName: "EventClick" */ '../views/EventClick.vue')
  },
  {
    path: '/EventChange',
    name: 'EventChange',
    component: () => import(/* webpackChunkName: "EventChange" */ '../views/EventChange.vue')
  },
  {
    path: '/Computed',
    name: 'Computed',
    component: () => import(/* webpackChunkName: "Computed" */ '../views/Computed.vue')
  },
  {
    path: '/Watch',
    name: 'Watch',
    component: () => import(/* webpackChunkName: "Watch" */ '../views/Watch.vue')
  },
  {
    path: '/Watch2',
    name: 'Watch2',
    component: () => import(/* webpackChunkName: "Watch2" */ '../views/Watch2.vue')
  },
  {
    path: '/DataBingingList02',
    name: 'DataBingingList02',
    component: () => import(/* webpackChunkName: "DataBingingList02" */ '../views/DataBingingList02.vue')
  },
  {
    path: '/nestedcomponent',
    name: 'nestedcomponent',
    component: () => import(/* webpackChunkName: "nestedcomponent" */ '../views/nestedcomponent.vue')
  },
  {
    path: '/childcomponent',
    name: 'childcomponent',
    component: () => import(/* webpackChunkName: "childcomponent" */ '../views/childcomponent.vue')
  },
  {
    path: '/childcomponent2',
    name: 'childcomponent2',
    component: () => import(/* webpackChunkName: "childcomponent2" */ '../views/childcomponent2.vue')
  },
  {
    path: '/childcomponent3',
    name: 'childcomponent3',
    component: () => import(/* webpackChunkName: "childcomponent3" */ '../views/childcomponent3.vue')
  },
  {
    path: '/childcomponent4',
    name: 'childcomponent4',
    component: () => import(/* webpackChunkName: "childcomponent4" */ '../views/childcomponent4.vue')
  },
  {
    path: '/childcomponent5',
    name: 'childcomponent5',
    component: () => import(/* webpackChunkName: "childcomponent5" */ '../views/childcomponent5.vue')
  },
  {
    path: '/parentcomponent',
    name: 'parentcomponent',
    component: () => import(/* webpackChunkName: "parentcomponent" */ '../views/parentcomponent.vue')
  },
  {
    path: '/parentcomponent2',
    name: 'parentcomponent2',
    component: () => import(/* webpackChunkName: "parentcomponent2" */ '../views/parentcomponent2.vue')
  },
  {
    path: '/parentcomponent3',
    name: 'parentcomponent3',
    component: () => import(/* webpackChunkName: "parentcomponent3" */ '../views/parentcomponent3.vue')
  },
  {
    path: '/parentcomponent4',
    name: 'parentcomponent4',
    component: () => import(/* webpackChunkName: "parentcomponent4" */ '../views/parentcomponent4.vue')
  },
  {
    path: '/parentcomponent5',
    name: 'parentcomponent5',
    component: () => import(/* webpackChunkName: "parentcomponent5" */ '../views/parentcomponent5.vue')
  },
  {
    path: '/SlotModalLayout',
    name: 'SlotModalLayout',
    component: () => import(/* webpackChunkName: "SlotModalLayout" */ '../views/SlotModalLayout.vue')
  },
  {
    path: '/SlotUseModalLayout',
    name: 'SlotUseModalLayout',
    component: () => import(/* webpackChunkName: "SlotUseModalLayout" */ '../views/SlotUseModalLayout.vue')
  },
  {
    path: '/ProvideInject',
    name: 'ProvideInject',
    component: () => import(/* webpackChunkName: "ProvideInject" */ '../views/ProvideInject.vue')
  },
  {
    path: '/Calculator',
    name: 'Calculator',
    component: () => import(/* webpackChunkName: "Calculator" */ '../views/Calculator.vue')
  },
  {
    path: '/CompositionAPI',
    name: 'CompositionAPI',
    component: () => import(/* webpackChunkName: "CompositionAPI" */ '../views/CompositionAPI.vue')
  },
  {
    path: '/CompositionAPI2',
    name: 'CompositionAPI2',
    component: () => import(/* webpackChunkName: "CompositionAPI2" */ '../views/CompositionAPI2.vue')
  },
  {
    path: '/CompositionAPI3',
    name: 'CompositionAPI3',
    component: () => import(/* webpackChunkName: "CompositionAPI3" */ '../views/CompositionAPI3.vue')
  },
  {
    path: '/CompositionAPI4',
    name: 'CompositionAPI4',
    component: () => import(/* webpackChunkName: "CompositionAPI4" */ '../views/CompositionAPI4.vue')
  },
  {
    path: '/CompositionAPIProvide',
    name: 'CompositionAPIProvide',
    component: () => import(/* webpackChunkName: "CompositionAPIProvide" */ '../views/CompositionAPIProvide.vue')
  },
  {
    path: '/CompositionAPIInject',
    name: 'CompositionAPIInject',
    component: () => import(/* webpackChunkName: "CompositionAPIInject" */ '../views/CompositionAPIInject.vue')
  },
  {
    path: '/mixins',
    name: 'mixins',
    component: () => import(/* webpackChunkName: "mixins" */ '../views/mixins.vue')
  },
  {
    path: '/CustomDirective',
    name: 'CustomDirective',
    component: () => import(/* webpackChunkName: "CustomDirective" */ '../views/CustomDirective.vue')
  },
  {
    path: '/Plugins',
    name: 'Plugins',
    component: () => import(/* webpackChunkName: "Plugins" */ '../views/Plugins.vue')
  },
  {
    path: '/StoreAccess',
    name: 'StoreAccess',
    component: () => import(/* webpackChunkName: "StoreAccess" */ '../views/StoreAccess.vue')
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
