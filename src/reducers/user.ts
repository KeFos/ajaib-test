import { AnyAction, Dispatch } from 'redux';
import { getUsers, getUsersFail, getUsersSuccess } from '../actions/user';
import {SortType} from '../types/sort';
import { UserModel } from '../types/user';
import * as types from '../types/user';
import axiosService from '../util/api';
import { userComparators } from '../util/sortComparator';

interface User {
    loading: boolean;
    data: UserModel[];
    page: number;
    seed?: string;
    sortedType: SortType | null;
}

const initialState: User = {
    loading: false,
    data: [],
    page: 1,
    sortedType: null
}

const userReducer = (state: User = initialState, action: AnyAction) => {

    switch (action.type) {
        case types.GET_USERS: {
            return {
                ...state,
                loading: true
            };
        }

        case types.GET_USERS_SUCCESS: {
            const { results, info } = action.payload;

            return {
                ...state,
                loading: false,
                data: results.map((user: UserModel) => ({ ...user, registered: { date: new Date(user.registered.date) } })),
                page: info.page,
                seed: info.seed,
                sortedType: null
            };
        }

        case types.GET_USERS_FAIL: {
            return {
                ...state,
                loading: false
            };
        }

        case types.SORT_USERS: {

            const { type, key } = action.payload as SortType;
            const { data } = state;

            return {
                ...state,
                data: data.sort(userComparators[`${key.toLowerCase()}-${type}`]),
                sortedType: action.payload
            };
        }

        default: {
            return state;
        }
    }
};

export const fetchUsers = (params: any = {}, sort: any = {}, page: number = 1) => async (dispatch: Dispatch) => {
    dispatch(getUsers());

    await axiosService.get('', { params: { ...params, page } })
        .then(res => dispatch(getUsersSuccess(res.data)))
        .catch(err => {
            alert('Oops, Something went wrong!');
            dispatch(getUsersFail());
        });
}

export const searchUsers = (value: string, params = { seed: '', page: 1 } ) => async (dispatch: Dispatch) => {
    dispatch(getUsers());

    await axiosService.get('')
        .then(res => {

            const { results } = res.data;

            dispatch(getUsersSuccess({
                ...res.data,
                results: results.filter((user: UserModel) =>
                    (`${user.name.first} ${user.name.last}`).includes(value) ||
                    user.login.username.includes(value) ||
                    user.email.includes(value))
            }));
        })
        .catch(err => {
            alert('Oops, Something went wrong!');
            dispatch(getUsersFail());
        });
}

export default userReducer;
