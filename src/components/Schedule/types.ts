export enum LessonType {
    Lab = 'lab',
    Practice = 'practice',
    Lection = 'lection'
}

export enum TimeIntervalType {
    Lesson = 'lesson',
    Break = 'break',
    Window = 'window'
}



export type DaysData = {
    [key: string]: string
}



// =================== In: time intervals



export type InTime = {
    type: TimeIntervalType;
    start: string;
    stop: string;
}

// ===================




// =================== In: lessons data

export type InLessons = {
    [key: string]: InLesson
}

 type InLesson = {
    title: string;
    teacher: string;
    type: LessonType;
    defaultRoom: string;
}

// ===================







// =================== In: week schedule

export type InSchedule = {
    [key: string]: InDay
}

 type InDay = Array<InScheduleLesson>;

 type InScheduleLesson = {
    id: string | number;
    times: Array<number>;
    room?: string;
}

// ===================




// =================== Out, ready for render

export type ScheduleTable = {
    header: any,
    rows: Array<ScheduleTableRow>
    footer: any
}


export type ScheduleTableRow = InTime & { days: Array<ScheduleTableCell> }

export type ScheduleTableCell = {
    dayName: string;
    hasMoreThanOne: boolean;
    hasLesson: boolean;
    lessons: Array<OutLesson>;
}

 type OutLesson = {
    id: string | number;
    title: string;
    teacher: string;
    room: string;
    type: LessonType;
}
export {OutLesson as ScheduleTableDayLessons};
// =================== Out, ready for render