<template>
    <div class="wrapper">

        <div class="center">
            <Schedule caption="Расписание занятий"
                      captionPosition="right"
                      :times="this.times"
                      :lessons="this.lessons"
                      :schedule="this.schedule"/>
        </div>
        <div class="leftSide">
            <Menu caption="Меню" class="stickyMenu" :items="this.items"/>
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
            },
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