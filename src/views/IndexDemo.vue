<template>
    <div class="demoIndex">
        <div style="display: inline-flex; margin: 0 auto; margin-top: 20px;">
        <Menu caption="Список компонентов" :items="this.items"/>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Menu from './../components/Menu.ts';
    export default Vue.extend({
       components: {
          Menu
       },
       data(){
          return {
             items: [
                {
                   caption: 'DemoComponent',
                   to: '/Controls-demo/DemoComponent'
                },
                {
                   caption: 'Buttons:Base',
                   to: '/Controls-demo/Buttons/Base'
                },
                {
                   caption: 'Menu',
                   to: '/Controls-demo/Menu'
                },
                {
                   caption: 'Schedule',
                   to: '/Controls-demo/Schedule'
                },
                {
                   caption: 'DemoPage',
                   to: '/Controls-demo/DemoPage'
                },
                {
                   caption: 'PlainPanel',
                   to: '/Controls-demo/PlainPanel'
                },
                {
                   caption: 'Footer',
                   to: '/Controls-demo/Footer'
                },
                {
                   caption: 'SearchForm',
                   to: '/Controls-demo/SearchForm'
                }
             ]
          }
       }
    })

</script>

<style lang="scss">
    .demoIndex {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 10px 30px;
        h4{
            margin-top: 30px;
            margin-bottom: 15px;
        }
    }
</style>