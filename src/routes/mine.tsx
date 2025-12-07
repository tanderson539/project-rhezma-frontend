import CopperOreButton from '@components/mining/buttons/CopperOreButton';
import TinOreButton from '@components/mining/buttons/TinOreButton';
import type { ItemKey } from '@root/game/items/Item_Catelog';
import { useItemActions } from '@root/stores/useItemStore';
import { usePlayerActions } from '@root/stores/usePlayerStore';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/mine')({
    component: RouteComponent,
});

function RouteComponent() {
    const { addItem } = useItemActions();

    const { performMiningAction } = usePlayerActions();

    const handleClick = (item: ItemKey, amt: number) => {
        addItem(item, amt);

        if (item === 'COPPER_ORE') {
            performMiningAction({ oreType: 'Copper' });
        } else if (item === 'TIN_ORE') {
            performMiningAction({ oreType: 'Tin' });
        }
    };

    return (
        <div className="grid grid-cols-4 gap-4">
            <CopperOreButton onClick={handleClick} />
            <TinOreButton onClick={handleClick} />
        </div>
    );
}
