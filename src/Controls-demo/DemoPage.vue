<template>
    <div class="wrapper">

        <div class="center">
            <Schedule caption="Расписание занятий"
                      captionPosition="right"
                      :times="times"
                      :lessons="lessons"
                      :schedule="schedule"/>
        </div>
        <div class="leftSide">
            <Menu caption="Меню" class="stickyMenu" :items="items"/>
        </div>
    </div>
</template>

<script>
   import Menu from "./../components/Menu.ts";
   import Schedule from "./../components/Shedule.ts"

   const Type = {
      Window: 0,
      Lesson: 1,
      Break: 2
   };

   export default {
      components: {
         Schedule,
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
            ],
            times: [
               {
                  start: '8:30',
                  stop: '10:00',
                  type: TimeIntervalType.Lesson
               },
               {
                  start: '10:00',
                  stop: '10:10',
                  type: TimeIntervalType.Break
               },
               {
                  start: '10:10',
                  stop: '11:40',
                  type: TimeIntervalType.Lesson
               },
               {
                  start: '11:40',
                  stop: '12:20',
                  type: TimeIntervalType.Break
               },
               {
                  start: '12:20',
                  stop: '13:50',
                  type: TimeIntervalType.Lesson
               },
               {
                  start: '13:50',
                  stop: '14:00',
                  type: TimeIntervalType.Break
               },
               {
                  start: '14:00',
                  stop: '15:30',
                  type: TimeIntervalType.Lesson
               },
               {
                  start: '15:30',
                  stop: '15:40',
                  type: TimeIntervalType.Break
               },
               {
                  start: '15:40',
                  stop: '17:10',
                  type: TimeIntervalType.Lesson
               },
               {
                  start: '17:10',
                  stop: '17:20',
                  type: TimeIntervalType.Break
               },
               {
                  start: '17:20',
                  stop: '18:50',
                  type: TimeIntervalType.Lesson
               }
            ],
            lessons: {
               1: {
                  title: 'WEB технологии',
                  teacher: 'Никитенко А.В.',
                  defaultRoom: 'А-404',
                  type: 'Lection',
                  color: 'orange'
               }
            },
            schedule:{
               "monday": [
                  {
                     id: 1,
                     times: [0,2,4],
                     room: 'Г-207'
                  }
               ]
            }
         }
      }
   }
</script>

<style scoped>
    .wrapper {
        display: flex;
        width: 1280px;
        margin: 0 auto;
        margin-top: 10px;

        justify-content: space-between;
    }
    .stickyMenu {
        position: sticky;
        top: 50px;
    }
    .leftSide {
        width: 200px;
        margin-left: 30px;
        margin-right: 10px;
    }
    .center {
        flex-grow: 1;
        margin-left: 10px;
        margin-right: 30px;
    }
</style>