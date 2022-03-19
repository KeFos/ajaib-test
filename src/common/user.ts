import {SortType} from '../types/sort';

export const userKeys = ['login', 'name', 'email', 'gender', 'registered'];

export const convertDate = (date: Date): string => {
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.toLocaleString('en-us', { hour: 'numeric', minute: 'numeric', hour12: false })}`;
}

export const isTheSameSortType = (a: SortType | undefined, b: SortType) => {

    if (typeof a !== typeof b) { return false; }

    return a?.type === b?.type && a.key === b.key;
}
