export interface Game {
    flag: string;
    locale_fallback?: string;
    name: string;
    shortURL: string;
    police?: string;
}

export interface Games {
    [locale: string]: Game;
}
