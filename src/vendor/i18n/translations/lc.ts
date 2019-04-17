enum Locals {
  Ru = 'ru',
  Eng = 'en'
}


const translations: {
    [key: string]: string
} = {
    'Monday': 'Понедельник',
    'Tuesday': 'Вторник',
    'Wednesday': 'Среда',
    'Thursday': 'Четверг',
    'Friday': 'Пятница',
    'Saturday': 'Суббота',
    'Sunday': 'Воскресенье',
    
    'monday': 'понедельник',
    'tuesday': 'вторник',
    'wednesday': 'среда',
    'thursday': 'четверг',
    'friday': 'пятница',
    'saturday': 'суббота',
    'sunday': 'воскресенье',
};





export function lc(inString:string/*, inLocal: Locals = Locals.Eng, outLocal: Locals.Ru*/): string {
    return translations[inString]
}