import ResourceButton from '@components/common/buttons/ResourceButton';
import tree from '@assets/tree.png';
import type { FC } from 'react';
import type { ItemKey } from '@root/game/items/Item_Catelog';

interface Props {
    onClick: (item: ItemKey, amt: number) => void;
    className?: string;
}

const OakTreeButton: FC<Props> = ({ onClick, className = '' }) => {
    return (
        <ResourceButton
            header="Oak Tree"
            subheader="1 oak log / 10xp"
            onClick={() => onClick('OAK_LOG', 1)}
            className={`${className}`}
        >
            <img src={tree} alt="tree" />
        </ResourceButton>
    );
};

export default OakTreeButton;
