import dictionary from './../dictionaries/Translation';

enum Locals {
  Ru = 'ru',
  Eng = 'en'
}

export function lc(inString:string/*, inLocal: Locals = Locals.Eng, outLocal: Locals.Ru*/): string {
    return dictionary[inString]
}