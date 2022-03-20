import { Fragment, useCallback, useEffect } from 'react';
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
import { fetchUsers, searchUsers } from '../reducers/user';
import { SortType } from '../types/sort';
import { UserModel } from '../types/user';
import { useAppSelector } from '../util/hooks';

const Home = () => {

    const { debounce } = require('lodash');
    const { data, page, sortedType, seed, loading } = useAppSelector(state => state.user);

    const dispatch = useDispatch();

    const search = useCallback(
        debounce((value: string) => {
            dispatch(searchUsers(value, { seed, page }));
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
        <div className="">
            <div className="mt-12 w-full flex justify-center">
                <div className="px-4 w-full lg:w-auto">
                    <div className="mb-12 flex flex-col sm:flex-row sm:space-x-4">
                        <SearchBar change={search}/>
                        <GenderFilter change={filter} reset={() => dispatch(fetchUsers())}/>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>{ 'Username' }</TableHead>
                                <TableHead sortable={data.length > 0} sort={sortProperty} sortType={sortedType}>{ 'Name' }</TableHead>
                                <TableHead sortable={data.length > 0} sort={sortProperty} sortType={sortedType}>{ 'Email' }</TableHead>
                                <TableHead sortable={data.length > 0} sort={sortProperty} sortType={sortedType}>{ 'Gender' }</TableHead>
                                <TableHead sortable={data.length > 0} sort={sortProperty} sortType={sortedType}>{ 'Registered Date' }</TableHead>
                            </TableRow>
                        </TableHeader>

                        {
                            data.length > 0 && (
                                <Fragment>
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
                                </Fragment>
                            )
                        }
                    </Table>
                    {
                        loading && (
                            <div>{ 'Loading...' }</div>
                        )
                    }
                    {
                        !loading && data.length === 0 && (
                            <div className="w-full flex justify-center items-center text-xl font-bold">
                                { `Sorry. No results :(` }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;
