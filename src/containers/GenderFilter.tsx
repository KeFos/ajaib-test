type Props = {
    change: Function;
    reset: Function;
}

const GenderFilter = ({ change, reset }: Props) => {
    return (
        <div>
            <div>
                { 'Gender' }
            </div>
            <div className="flex space-x-4">
                <select className="w-40 p-2 border border-gray-400 focus:outline-0"
                        onChange={(e) => change(e.target.value)}>
                    <option value="" >All</option>
                    <option value="female" >Female</option>
                    <option value="male" >Male</option>
                </select>
                <button type="button" className="py-2 px-4 border border-gray-400" onClick={e => reset()}>
                    { 'Reset Filter' }
                </button>
            </div>
        </div>
    );
}

export default GenderFilter;
