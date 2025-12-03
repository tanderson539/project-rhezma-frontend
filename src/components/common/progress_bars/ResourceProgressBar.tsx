import type { FC } from 'react';

interface Props {
    progress?: number;
    max?: number;
    className?: string;
}

const ResourceProgressBar: FC<Props> = ({
    progress = 0,
    max = 100,
    className,
}) => {
    return <progress value={progress} max={max} className={`${className}`} />;
};

export default ResourceProgressBar;
