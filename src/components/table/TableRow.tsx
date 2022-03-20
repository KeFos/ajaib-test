import { ReactNode } from 'react';

type Props = {
    children: ReactNode[] | ReactNode
}

const TableRow = ({ children }: Props) => {
    return (
        <tr>
            { children }
        </tr>
    )
}

export default TableRow;
