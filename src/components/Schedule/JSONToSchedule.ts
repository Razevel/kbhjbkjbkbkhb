var exampleIn = {
    "times": [],
    "lessons": {
        "123": {
            "title": "Предмет 1",
            "teacher": "Somebody"
        }
    },
    "schedule": {
        "monday": [
            {
                "id": "123",
                "type": 'praktika',
                "times": [1, 2, 3]
            }
        ]
    }
};

var exampleOut = [
    {
        start: "8:30",
        end: "10:00",
        type: 'Para',
        lessons: [
            //Monday..(1 less)
            {
                id: 1,
                title: "Predmet kakouto",
                teacher: 'Ktoto',
                room: '200',
                hasMore: true
            },
            //Thursday..
            {}
        ],
    },
    {
        start: "10:00",
        end: "10:10",
        type: 'Peremena',
    },
];


type InScheduleLesson = {
    id: string | number;
    times: Array<number>;
    room?: string;
}

type InDay = Array<InScheduleLesson>;

type InSchedule = {
    [key: string]: InDay
}

enum LessonType {
    Lab = 'lab',
    Practice = 'practice',
    Lection = 'lection'
}

type InLesson = {
    title: string;
    teacher: string;
    type: LessonType;
    defaultRoom: string;
}
type InLessons = {
    [key: string]: InLesson
}

type InTimes = Array<InTime>


type InTime = {
    type: TimeIntervalType;
    start: string;
    stop: string;
}

enum TimeIntervalType {
    Lesson = 'lesson',
    Break = 'break',
    Window = 'window'
}

type OutLesson = {
    id: string | number;
    title: string;
    teacher: string;
    room: string;
    type: LessonType;
}

type OutSchedule = Array<OutScheduleRow>;

type OutScheduleRow = InTime & {
    days: Array<OutDay>
}

type OutDay = {
    dayName: string;
    hasMoreThanOne: boolean;
    hasLesson: boolean;
    lessons: Array<OutLesson>;
}

const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

function convert(schedule: InSchedule, lessons: InLessons, times: InTimes): OutSchedule {
    debugger;
    
    let result: OutSchedule = [];
    
    // Идём по интервалам времени, это пары и перемены, посути строки таблицы
    times.forEach((timeInterval, tiIndex) => {
        let scheduleRow: OutScheduleRow = {
            start: timeInterval.start,
            stop: timeInterval.stop,
            type: timeInterval.type,
            days: []
        };
        
        //Пройдемся по дням недели и соберем занятия на текущем промежутке времени (строке)
        weekDays.forEach((dayName, dayIndex) => {
            
            let
                dayLessons = schedule[dayName],
                outDay: OutDay = {
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
        
        result.push(scheduleRow);
    });
    return result;
}


export {
    convert,
    TimeIntervalType,
    
    InSchedule,
    InDay,
    InScheduleLesson,
    
    InTimes,
    InTime,
    
    InLessons,
    InLesson,
    LessonType,
    
    OutSchedule,
    OutScheduleRow,
    OutDay,
    OutLesson
}