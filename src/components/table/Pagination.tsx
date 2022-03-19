import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    next?: Function;
    prev?: Function;
    page: number;
    colSpan: number;
}

const Pagination = ({ next, prev, page, colSpan }: Props) => {
    return (
        <tfoot>
            <tr>
                <td colSpan={colSpan}>
                    <div className="w-full flex justify-end space-x-4 mt-12">
                        <button type="button" className="border border-gray-400 text-gray-400 py-1 px-3"
                                onClick={() => (page - 1 > 0) && prev && prev()}>
                            <FontAwesomeIcon className="hover:cursor-pointer" icon={faChevronLeft}/>
                        </button>

                        {
                            (page - 1 > 0) && (
                                <button type="button" className="border border-gray-400 text-gray-400 py-1 px-3"
                                        onClick={() => prev && prev()}>
                                    { page - 1 }
                                </button>
                            )
                        }

                        <button type="button" className="border-2 border-blue-400 text-blue-400 py-1 px-3">
                            { page }
                        </button>

                        <button type="button" className="border border-gray-400 text-gray-400 py-1 px-3"
                                onClick={() => next && next()}>
                            { page + 1 }
                        </button>

                        <button type="button" className="border border-gray-400 text-gray-400 py-1 px-3"
                                onClick={() => next && next()}>
                            <FontAwesomeIcon className="hover:cursor-pointer" icon={faChevronRight}/>
                        </button>
                    </div>
                </td>
            </tr>
        </tfoot>
    );
}

export default Pagination;
