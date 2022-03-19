import { ReactChild } from 'react';

type Props = {
    children: ReactChild[] | ReactChild
}

const TableBody = ({ children }: Props) => {
    return (
        <tbody>
            { children}
        </tbody>
    );
}

export default TableBody;
