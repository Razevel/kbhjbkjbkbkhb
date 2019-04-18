import {
    TimeIntervalType, LessonType, InSchedule,
    InLessons, ScheduleTable, ScheduleTableRow, ScheduleTableCell, InTime
} from './types'

const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

function convert(schedule: InSchedule, lessons: InLessons, times: Array<InTime>): ScheduleTable {
    
    let result: ScheduleTable = {
        header: [],
        rows: [],
        footer: {}
    };
    
    weekDays.forEach(dayName => {
        result.header.push({
            dayName,
            dayData: '123'
        });
    });
    
    // Идём по интервалам времени, это пары и перемены, посути строки таблицы
    times.forEach((timeInterval, tiIndex) => {
        let scheduleRow: ScheduleTableRow = { ...timeInterval, days: [] };
        
        //Пройдемся по дням недели и соберем занятия на текущем промежутке времени (строке)
        weekDays.forEach((dayName, dayIndex) => {
            
            let
                dayLessons = schedule[dayName],
                outDay: ScheduleTableCell = {
                    dayName,
                    hasLesson: false,
                    hasMoreThanOne: false,
                    lessons: []
                };
            
            if (dayLessons && dayLessons instanceof Array) {
                // Находи занятия в этом промежутке времени и записываем
                dayLessons.forEach((lesson, lessonIndex) => {
                    if (lesson.times.indexOf(tiIndex) !== -1) {
                        
                        // Если уже был наден один, значит это второй или более.
                        outDay.hasMoreThanOne = outDay.hasLesson;
                        outDay.hasLesson = true;
                        
                        outDay.lessons.push({
                            id: lesson.id,
                            title: lessons[lesson.id].title,
                            type: lessons[lesson.id].type,
                            teacher: lessons[lesson.id].teacher,
                            room: lesson.room || lessons[lesson.id].defaultRoom
                        });
                    }
                });
                
                
            }
            scheduleRow.days.push(outDay);
        });
        
        result.rows.push(scheduleRow);
    });
    return result;
}


export {
    convert,
    TimeIntervalType,
    LessonType,
    
    ScheduleTable,
    ScheduleTableRow,
    ScheduleTableCell
}