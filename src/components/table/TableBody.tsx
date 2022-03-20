import { ReactNode } from 'react';

type Props = {
    children: ReactNode[] | ReactNode
}

const TableBody = ({ children }: Props) => {
    return (
        <tbody>
            { children}
        </tbody>
    );
}

export default TableBody;
