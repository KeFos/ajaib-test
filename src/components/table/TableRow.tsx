import { ReactChild } from 'react';

type Props = {
    children: ReactChild[] | ReactChild
}

const TableRow = ({ children }: Props) => {
    return (
        <tr>
            { children }
        </tr>
    )
}

export default TableRow;
