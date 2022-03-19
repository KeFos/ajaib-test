export const GET_USERS = 'get_users';
export const GET_USERS_SUCCESS = 'get_users_success';
export const GET_USERS_FAIL = 'get_users_fail';
export const SORT_USERS = 'sort_users';

interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

interface Name {
    title: string;
    first: string;
    last: string;
}

interface RegisteredDate {
    date: Date;
    age: number;
}

export interface UserModel {
    login: Login;
    name: Name;
    email: string;
    gender: string;
    registered: RegisteredDate;
}
