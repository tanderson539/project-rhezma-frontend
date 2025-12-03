import type { FC } from 'react';
import tree from '@assets/tree.png';
import ResourceButton from '@components/common/buttons/ResourceButton';

interface Props {
    onClick: (amt: number) => void;
    className?: string;
}

const TreeButton: FC<Props> = ({ onClick, className }) => {
    return (
        <ResourceButton
            header="Tree"
            subheader="1 log / 6xp"
            onClick={() => onClick(1)}
            className={`${className}`}
        >
            <img src={tree} alt="tree" />
        </ResourceButton>
    );
};

export default TreeButton;
