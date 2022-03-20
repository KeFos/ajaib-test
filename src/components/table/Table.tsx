import { ReactNode } from 'react';

type Props = {
    children: ReactNode[] | boolean
}

const Table = ({ children }: Props) => {
    return (
        <div className="inline-block pt-8 border-t border-gray-200">
            <table className="table-auto">
                { children }
            </table>
        </div>
    );
}

export default Table;
