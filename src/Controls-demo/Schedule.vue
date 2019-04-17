<template>

    <Schedule caption="Расписание занятий"
              captionPosition="right"
              :times="this.inTimes"
              :lessons="this.inLessons"
              style="width: 800px; margin: 10px auto;"
              :schedule="this.inSchedule"/>
</template>

<script>
   import { Schedule, InTimes, InTime, TimeIntervalType } from "./../components/Shedule.ts"

   const Type = {
      Window: 0,
      Lesson: 1,
      Break: 2
   };

   export default {
      components: {
         Schedule
      },
      data() {
         return {
            inTimes: [
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
            inLessons: {
               1: {
                  title: 'WEB технологии',
                  teacher: 'Никитенко А.В.',
                  defaultRoom: 'А-404',
                  type: 'Lection'
               }
            },
            inSchedule:{
               "monday": [
                  {
                     id: 1,
                     times: [1,3,5],
                     room: 'Г-207'
                  }
               ]
            },
            lessons: {
               1: {
                  id: 1,
                  title: 'WEB технологии',
                  teacher: 'Никитенко А.В.',
                  type: 'л.р.',
                  color: 'orange',
                  room: 'А-420'
               },
               2: {
                  id: 2,
                  title: 'Прикладная физическая культура',
                  teacher: '',
                  type: 'пр.з.',
                  color: 'pink',
                  room: ''
               },
               3: {
                  id: 3,
                  title: 'Англ. яз.',
                  teacher: 'Иванова А.В.',
                  type: 'пр.з.',
                  color: 'green',
                  room: 'Г-714'
               },
               4: {
                  id: 4,
                  title: 'WEB технологии',
                  teacher: 'А.В.Никитенко',
                  type: 'лек.',
                  color: 'violet',
                  room: 'Г-608'
               },
               5: {
                  id: 5,
                  title: 'Технологии программирования',
                  teacher: 'Раухваргер А.Б.',
                  type: 'л.р',
                  color: 'moreen',
                  room: 'Г-507'
               },
               6: {
                  id: 6,
                  title: 'Системы упр-ния базами данных',
                  teacher: 'С.Ю.Бойков',
                  type: 'лек.',
                  room: 'Г-608',
                  color: 'yellow'
               },
               7: {
                  id: 7,
                  title: 'Теория вероятности',
                  type: 'лек.',
                  teacher: 'А.Б.Раухваргер',
                  room: 'А-416',
               },
               8: {
                  id: 8,
                  title: 'Алгоритмы и структуры данных',
                  teacher: 'А.Б.Раухваргер',
                  type: 'лаб',
                  room: 'А-225',
                  color: 'red'
               }
            },
            schedule: {
               header: [
                  {
                     dayName: 'Понедельник',
                     dayData: '11'
                  },
                  {
                     dayName: 'Вторник',
                     dayData: '12'
                  },
                  {
                     dayName: 'Среда',
                     dayData: '13'
                  },
                  {
                     dayName: 'Четверг',
                     dayData: '14'
                  },
                  {
                     dayName: 'Пятница',
                     dayData: '15'
                  },
                  {
                     dayName: 'Суббота',
                     dayData: '16'
                  }

               ],
               rows: [
                  {
                     type: Type.Lesson,
                     lessons: [
                        {
                           type: Type.Lesson,
                           id: 4,
                        },
                        {
                           type: Type.Lesson,
                           id: 5,
                        },
                        {
                           type: Type.Window
                        },
                        {
                           type: Type.Lesson,
                           id: 1,
                        },
                        {
                           type: Type.Window
                        },
                        {
                           type: Type.Window
                        }
                     ]
                  },
                  {
                     type: Type.Break,
                     lessons: [
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break,
                        },
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        }
                     ]
                  },
                  {
                     type: Type.Lesson,
                     lessons: [
                        {
                           type: Type.Lesson,
                           id: 2,
                        },
                        {
                           type: Type.Lesson,
                           id: 5,
                        },
                        {
                           type: Type.Lesson,
                           id: 2,
                           hasContinue: false
                        },
                        {
                           type: Type.Lesson,
                           id: 1,
                        },
                        {
                           type: Type.Window
                        },
                        {
                           type: Type.Window
                        }
                     ]
                  },
                  {
                     type: Type.Break,
                     lessons: [
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        }
                     ]
                  },
                  {
                     type: Type.Lesson,
                     lessons: [
                        {
                           type: Type.Lesson,
                           id: 1,
                        },
                        {
                           type: Type.Lesson,
                           id: 6,
                        },
                        {
                           type: Type.Lesson,
                           id: 1,
                           hasContinue: false
                        },
                        {
                           type: Type.Lesson,
                           id: 1,
                        },
                        {
                           type: Type.Window
                        },
                        {
                           type: Type.Window
                        }
                     ]
                  },
                  {
                     type: Type.Break,
                     lessons: [
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        }
                     ]
                  },
                  {
                     type: Type.Lesson,
                     lessons: [
                        {
                           type: Type.Lesson,
                           id: 1,
                        },
                        {
                           type: Type.Lesson,
                           id: 8,
                        },
                        {
                           type: Type.Lesson,
                           id: 3,
                        },
                        {
                           type: Type.Lesson,
                           id: 3,
                        },
                        {
                           type: Type.Window
                        },
                        {
                           type: Type.Window
                        }
                     ]
                  },
                  {
                     type: Type.Break,
                     lessons: [
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        }
                     ]
                  },
                  {
                     type: Type.Lesson,
                     lessons: [
                        {
                           type: Type.Lesson,
                           id: 3,
                        },
                        {
                           type: Type.Lesson,
                           id: 8,
                        },
                        {
                           type: Type.Window
                        },
                        {
                           type: Type.Lesson,
                           id: 1,
                        },
                        {
                           type: Type.Lesson,
                           id: 3,
                        },
                        {
                           type: Type.Window
                        },
                     ]
                  },
                  {
                     type: Type.Break,
                     lessons: [
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        },
                        {
                           type: Type.Break
                        }
                     ]
                  },
                  {
                     type: Type.Lesson,
                     lessons: [

                        {
                           type: Type.Window
                        },

                        {
                           type: Type.Window
                        },
                        {
                           type: Type.Window
                        },
                        {
                           type: Type.Window
                        },

                        {
                           type: Type.Window
                        },
                        {
                           type: Type.Window
                        }
                     ]
                  }
               ]
            }
         }
      }
   }
</script>

<style scoped>

</style>