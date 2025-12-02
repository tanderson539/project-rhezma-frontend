import type { FC } from 'react';
import tree from '../../assets/tree.png';

interface Props {
    onClick?: () => void;
    className?: string;
}

const TreeButton: FC<Props> = ({ onClick, className }) => {
    return (
        <button onClick={onClick} className={`${className}`}>
            <img src={tree} alt="tree" />
        </button>
    );
};

export default TreeButton;
