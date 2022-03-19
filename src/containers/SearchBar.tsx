import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props  = {
    change: Function;
}

const SearchBar = ({ change }: Props) => {
    return (
        <div>
            { 'Search' }
            <div className="flex">
                <input className="border border-gray-400 px-2 py-1 rounded-tl-sm rounded-bl-sm focus:outline-0"
                       onChange={ e => change(e.target.value)}/>
                <button type="button" className="w-14 bg-blue-400 p-2 rounded-tr-sm rounded-br-sm">
                    <FontAwesomeIcon icon={faSearch} color="white"/>
                </button>
            </div>
        </div>
    );
}

export default SearchBar;
