import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isTheSameSortType } from '../../common/user';
import { SORT_ASCENDING, SORT_DESCENDING, SortType } from '../../types/sort';

type Props = {
    children: string;
    sortable?: boolean;
    sortType?: SortType;
    sort?: Function;
}

const TableHead = ({ children, sortable, sortType, sort }: Props) => {

    const sortAscType: SortType = { type: SORT_ASCENDING, key: children };
    const sortDescType: SortType = { type: SORT_DESCENDING, key: children };

    return (
        <th>
            <div className="py-4 px-4 font-medium flex items-center justify-between space-x-2">
                { children }
                {
                    sortable && (
                        <div className="flex flex-col justify-between">
                            <FontAwesomeIcon className={`hover:cursor-pointer ${isTheSameSortType(sortType, sortAscType) && 'text-blue-400'}`}
                                             icon={faCaretUp}
                                             onClick={() => sort && sort(sortAscType)}/>
                            <FontAwesomeIcon className={`hover:cursor-pointer ${isTheSameSortType(sortType, sortDescType) && 'text-blue-400'}`}
                                             icon={faCaretDown}
                                             onClick={() => sort && sort(sortDescType)}/>
                        </div>
                    )
                }
            </div>
        </th>
    )
}

export default TableHead;
