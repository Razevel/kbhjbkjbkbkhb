import Vue from 'vue'
import Router from 'vue-router'
import ControlsDemoIndex from './views/IndexDemo.vue'
import * as DemoPages from './Controls-demo/DemoComponents'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/Controls-demo',
            name: '/Controls-demo',
            component: ControlsDemoIndex
        },
        {
            path: '/Controls-demo/DemoComponent',
            name: '/Controls-demo/DemoComponent',
            component: DemoPages.DemoComponent
        },
        {
            path: '/Controls-demo/Buttons/Base',
            name: '/Controls-demo/Buttons/Base',
            component: DemoPages.BaseButton
        },
        {
            path: '/Controls-demo/Menu',
            name: '/Controls-demo/Menu',
            component: DemoPages.Menu
        },
        {
            path: '/Controls-demo/Schedule',
            name: '/Controls-demo/Schedule',
            component: DemoPages.Schedule
        },
        {
            path: '/Controls-demo/DemoPage',
            name: '/Controls-demo/DemoPage',
            component: DemoPages.DemoPage
        },
        {
            path: '/Controls-demo/PlainPanel',
            name: '/Controls-demo/PlainPanel',
            component: DemoPages.PlainPanel
        },
        {
            path: '/Controls-demo/Footer',
            name: '/Controls-demo/Footer',
            component: DemoPages.Footer
        },
        {
            path: '/Controls-demo/SearchForm',
            name: '/Controls-demo/SearchForm',
            component: DemoPages.SearchForm
        },
        {
            path: '/Controls-demo/PlainPanel',
            name: '/Controls-demo/PlainPanel',
            component: DemoPages.PlainPanel
        }
    ]
})
