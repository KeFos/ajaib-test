import { ReactNode } from 'react';

type Props = {
    children: ReactNode[] | ReactNode
}

const TableCell = ({ children }: Props) => {
    return (
        <td className="py-5 px-5 border-b w-12 sm:w-24 md:w-48">
            { children }
        </td>
    )
}

export default TableCell;
