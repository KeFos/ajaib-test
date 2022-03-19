import { SORT_ASCENDING, SORT_DESCENDING } from '../types/sort';
import { UserModel } from '../types/user';

export const userComparators = {
    [`name-${SORT_DESCENDING}`]: (a: UserModel, b: UserModel) => `${a.name.first} ${a.name.last}` > `${b.name.first} ${b.name.last}` ? -1 : 1,
    [`name-${SORT_ASCENDING}`]: (a: UserModel, b: UserModel) => `${a.name.first} ${a.name.last}` < `${b.name.first} ${b.name.last}` ? -1 : 1,
    [`email-${SORT_DESCENDING}`]: (a: UserModel, b: UserModel) => a.email > b.email ? -1 : 1,
    [`email-${SORT_ASCENDING}`]: (a: UserModel, b: UserModel) => a.email < b.email ? -1 : 1,
    [`gender-${SORT_DESCENDING}`]: (a: UserModel, b: UserModel) => a.gender > b.gender ? -1 : 1,
    [`gender-${SORT_ASCENDING}`]: (a: UserModel, b: UserModel) => a.gender < b.gender ? -1 : 1,
    [`registered date-${SORT_DESCENDING}`]: (a: UserModel, b: UserModel) => a.registered.date > b.registered.date ? -1 : 1,
    [`registered date-${SORT_ASCENDING}`]: (a: UserModel, b: UserModel) => a.registered.date < b.registered.date ? -1 : 1,
}
