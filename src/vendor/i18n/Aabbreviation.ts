import dictionary from './dictionaries/Aabbreviation'

export function cut(str: string): string {
    return dictionary.to[str];
}

export function expand(str: string): string {
    return dictionary.from[str];
}