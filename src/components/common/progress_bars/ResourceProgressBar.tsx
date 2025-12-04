import type { FC } from 'react';

interface Props {
    progress?: number;
    barClassName?: string;
    fillClassName?: string;
}

const ResourceProgressBar: FC<Props> = ({
    progress = 0,
    barClassName = '',
    fillClassName = '',
}) => {
    return (
        <div className={`bg-gray-600 ${barClassName}`}>
            <div
                className={`h-full bg-green-600 transition-all duration-500 ease-in-out ${fillClassName}`}
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default ResourceProgressBar;
