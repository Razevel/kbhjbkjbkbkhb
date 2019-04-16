<template>
    <div class="wrap">
        <div style="display: inline-flex" class="demo-mainMenu">
            <Menu caption="Главное меню сообщений и расписания" :items="this.items"/>
        </div>
    </div>
</template>

<script>
   import Menu from "./../components/Menu.ts";

   export default {
      components: {
         Menu
      },
      data() {
         return {
            items: [
               {
                  caption: 'Пункт меню 1',
                  to: '#1'
               },
               {
                  caption: 'Пункт меню 2',
                  to: '#2'
               },
               {
                  caption: 'Пункт меню 3',
                  to: '#3'
               },
               {
                  caption: 'Пункт меню 4',
                  to: '#4'
               },
               {
                  caption: 'Пункт меню 5',
                  to: '#5'
               },
               {
                  caption: 'Пункт меню 6',
                  to: '#6'
               },
               {
                  caption: 'Пункт меню 7',
                  to: '#7'
               },
               {
                  caption: 'Пункт меню 8',
                  to: '#8'
               },
               {
                  caption: 'Пункт меню 9',
                  to: '#9'
               },
               {
                  caption: 'Пункт меню 10',
                  to: '#10'
               }
            ]
         }
      }
   }
</script>

<style lang="scss" scoped>
    .wrap {
        margin: 30px;
    }
</style>