import type { FC } from 'react';

interface Props {
    text: string;
    className?: string;
}

const NavLabel: FC<Props> = ({ text, className }) => {
    return (
        <div
            className={`text-md my-2 font-light text-indigo-700 dark:text-indigo-400 ${className}`}
        >
            {text}
        </div>
    );
};

export default NavLabel;
