import { ReactChild } from 'react';

type Props = {
    children: ReactChild[] | ReactChild
}

const TableHeader = ({ children }: Props) => {
    return (
        <thead className="bg-gray-100 capitalize rounded-t-lg">
            { children }
        </thead>
    );
}

export default TableHeader;
