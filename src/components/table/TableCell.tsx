import { ReactChild } from 'react';

type Props = {
    children: ReactChild[] | ReactChild
}

const TableCell = ({ children }: Props) => {
    return (
        <td className="py-5 px-5 border-b w-48">
            { children }
        </td>
    )
}

export default TableCell;
