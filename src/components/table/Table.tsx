import { ReactChild } from 'react';

type Props = {
    children: ReactChild[] | ReactChild
}

const Table = ({ children }: Props) => {
    return (
        <div className="inline-block pt-8 border-t border-gray-200">
            <table className="table-fixed">
                { children }
            </table>
        </div>
    );
}

export default Table;
