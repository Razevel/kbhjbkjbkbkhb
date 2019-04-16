<template>
    <Schedule caption="Расписание занятий"
              captionPosition="right"
              :times="this.times"
              :lessons="this.lessons"
              :schedule="this.schedule"/>
</template>

<script>
   import Schedule from "./../components/Shedule.ts"

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
            lessons: [
               {
                  id: 1,
                  title: 'WEB технологии',
                  teacher: 'Никитенко А.В.',
                  type: 'л.р.'
               },
               {
                  id: 2,
                  title: 'Прикладная физическая культура',
                  teacher: '',
                  type: 'пр.з.'
               },
               {
                  id: 3,
                  title: 'Англ. яз.',
                  teacher: 'Иванова А.В.',
                  type: 'пр.з.'
               }
            ],
            times: [
               '8:30',
               '10:00',
               '10:10',
               '11:40',
               '12:20',
               '13:50',
               '14:00',
               '15:30',
               '15:40',
               '17:10',
               '17:20',
               '18:50'
            ],
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
                           lessonEnd: '13:50',
                           type: Type.Lesson,
                           id: 1,
                           hasContinue: true
                        },
                        {
                           type: Type.Window
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
                           lessonEnd: '13:50',
                           type: Type.Lesson,
                           id: 1,
                           hasContinue: true
                        },
                        {
                           type: Type.Window
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
                     type: Type.Lesson,
                     lessons: [
                        {
                           lessonEnd: '13:50',
                           type: Type.Lesson,
                           id: 1,
                           hasContinue: true
                        },
                        {
                           type: Type.Window
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
                           lessonEnd: '13:50',
                           type: Type.Lesson,
                           id: 1,
                           hasContinue: true
                        },
                        {
                           type: Type.Window
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
                     type: Type.Lesson,
                     lessons: [
                        {
                           lessonEnd: '13:50',
                           type: Type.Lesson,
                           id: 1,
                           hasContinue: true
                        },
                        {
                           type: Type.Window
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
                           lessonEnd: '13:50',
                           type: Type.Lesson,
                           id: 1,
                           hasContinue: true
                        },
                        {
                           type: Type.Window
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
                     type: Type.Lesson,
                     lessons: [
                        {
                           lessonEnd: '13:50',
                           type: Type.Lesson,
                           id: 1,
                           hasContinue: true
                        },
                        {
                           type: Type.Window
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
                           lessonEnd: '13:50',
                           type: Type.Lesson,
                           id: 1,
                           hasContinue: true
                        },
                        {
                           type: Type.Window
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
                     type: Type.Lesson,
                     lessons: [
                        {
                           lessonEnd: '13:50',
                           type: Type.Lesson,
                           id: 1,
                           hasContinue: true
                        },
                        {
                           type: Type.Window
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
                           lessonEnd: '13:50',
                           type: Type.Lesson,
                           id: 1,
                           hasContinue: true
                        },
                        {
                           type: Type.Window
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
                     type: Type.Lesson,
                     lessons: [
                        {
                           lessonEnd: '13:50',
                           type: Type.Lesson,
                           id: 1,
                           hasContinue: true
                        },
                        {
                           type: Type.Window
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
                  }
               ]
            }
         }
      }
   }
</script>

<style scoped>

</style>