import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Weather from '@/components/Weather'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/weather',
      name: 'Weather',
      component: Weather,
      data: {
        conditon: 'Windy',
        temperature: '18 degrees celsius'
      }
    }
  ]
})
