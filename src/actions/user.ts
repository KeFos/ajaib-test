import { SortType } from '../types/sort';
import { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS, SORT_USERS } from '../types/user';

export const getUsers = () => ({
    type: GET_USERS
});

export const getUsersSuccess = (data: any) => ({
    type: GET_USERS_SUCCESS,
    payload: data
});

export const getUsersFail = () => ({
    type: GET_USERS_FAIL
});

export const sortUsers = (payload: SortType) => ({
    type: SORT_USERS,
    payload
});
