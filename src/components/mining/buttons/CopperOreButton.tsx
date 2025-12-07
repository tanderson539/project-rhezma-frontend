import ResourceButton from '@components/common/buttons/ResourceButton';
import type { ItemKey } from '@root/game/items/Item_Catelog';
import { type FC } from 'react';
import tree from '@assets/tree.png';

interface Props {
    onClick: (item: ItemKey, amt: number) => void;
    className?: string;
}

const CopperOreButton: FC<Props> = ({ onClick, className }) => {
    return (
        <ResourceButton
            header="Copper Ore"
            subheader="1 copper ore / idk, some xp i guess"
            onClick={() => onClick('COPPER_ORE', 1)}
            className={`${className}`}
        >
            <img src={tree} alt="ore" />
        </ResourceButton>
    );
};

export default CopperOreButton;
