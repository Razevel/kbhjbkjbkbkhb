<template>

    <Schedule caption="Расписание занятий"
              captionPosition="right"
              :times="times"
              :lessons="lessons"
              style="width: 800px; margin: 10px auto;"
              :schedule="schedule"/>
</template>

<script>
   import { Schedule, TimeIntervalType, LessonType } from "./../components/Shedule.ts"

   export default {
      components: {
         Schedule
      },
      data() {
         return {
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
                  type: LessonType.Lection,
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

</style>