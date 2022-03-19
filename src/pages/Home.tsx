import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sortUsers } from '../actions/user';
import { convertDate, userKeys } from '../common/user';
import Pagination from '../components/table/Pagination';
import Table from '../components/table/Table';
import TableBody from '../components/table/TableBody';
import TableCell from '../components/table/TableCell';
import TableHead from '../components/table/TableHead';
import TableHeader from '../components/table/TableHeader';
import TableRow from '../components/table/TableRow';
import GenderFilter from '../containers/GenderFilter';
import SearchBar from '../containers/SearchBar';
import { fetchUsers } from '../reducers/user';
import { SortType } from '../types/sort';
import { UserModel } from '../types/user';
import { useAppSelector } from '../util/hooks';

const Home = () => {

    const { debounce } = require('lodash');
    const { data, page, sortedType, seed } = useAppSelector(state => state.user);

    const dispatch = useDispatch();

    const search = useCallback(
        debounce((value: string) => {
            dispatch(fetchUsers({ name: value }));
        }, 1000), []);

    const filter = (gender: string) => {
        dispatch(fetchUsers({ gender }));
    }

    const nextPage = () => {
        dispatch(fetchUsers({ seed }, {}, page + 1));
    }

    const prevPage = () => {
        dispatch(fetchUsers({ seed }, {}, page - 1));
    }

    const sortProperty = (sortType: SortType) => {
        dispatch(sortUsers(sortType));
    }

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div className="flex justify-center">
            <div className="mt-12">
                <div className="mb-12 flex space-x-4">
                    <SearchBar change={search}/>
                    <GenderFilter change={filter} reset={() => dispatch(fetchUsers())}/>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>{ 'Username' }</TableHead>
                            <TableHead sortable sort={sortProperty} sortType={sortedType}>{ 'Name' }</TableHead>
                            <TableHead sortable sort={sortProperty} sortType={sortedType}>{ 'Email' }</TableHead>
                            <TableHead sortable sort={sortProperty} sortType={sortedType}>{ 'Gender' }</TableHead>
                            <TableHead sortable sort={sortProperty} sortType={sortedType}>{ 'Registered Date' }</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {
                            data.map((user: UserModel, key: number) => (
                                <TableRow key={key}>
                                    <TableCell>{ user.login.username }</TableCell>
                                    <TableCell>{ `${user.name.first} ${user.name.last}` }</TableCell>
                                    <TableCell>{ user.email }</TableCell>
                                    <TableCell>{ user.gender }</TableCell>
                                    <TableCell>{ convertDate(user.registered.date) }</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                    <Pagination colSpan={userKeys.length} page={page} next={nextPage} prev={prevPage}/>
                </Table>
            </div>
        </div>
    );
}

export default Home;
