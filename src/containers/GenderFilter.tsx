import {useState} from 'react';

type Props = {
    change?: Function;
    reset?: Function;
}

const GenderFilter = ({ change, reset }: Props) => {

    const [gender, setGender] = useState('');

    const checkGenderValue = () => {
        return gender === '';
    }

    return (
        <div>
            <div>
                { 'Gender' }
            </div>
            <div className="flex space-x-4">
                <select className="w-40 p-2 border border-gray-400 focus:outline-0"
                        value={gender}
                        onChange={(e) => { setGender(e.target.value); change && change(e.target.value); }}>
                    <option value="" >All</option>
                    <option value="female" >Female</option>
                    <option value="male" >Male</option>
                </select>
                <button type="button"
                        disabled={checkGenderValue()}
                        className={`py-2 px-4 border border-gray-400 ${checkGenderValue() && 'bg-gray-200 text-gray-400'}`}
                        onClick={e => { setGender(''); reset && reset(); }}>
                    { 'Reset Filter' }
                </button>
            </div>
        </div>
    );
}

export default GenderFilter;
