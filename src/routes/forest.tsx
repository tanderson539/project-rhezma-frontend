import { createFileRoute } from '@tanstack/react-router';
import TreeButton from '@components/forestry/buttons/TreeButton';
import OakTreeButton from '@components/forestry/buttons/OakTreeButton';
import { useForestryAction } from '@root/stores/usePlayerStore';
import { useItemActions } from '@root/stores/useItemStore';
import type { ItemKey } from '@root/game/items/Item_Catelog';

export const Route = createFileRoute('/forest')({
    component: RouteComponent,
});

function RouteComponent() {
    const { addItem } = useItemActions();

    const giveForestryXP = useForestryAction();

    const handleClick = (item: ItemKey, amt: number) => {
        addItem(item, amt);
        if (item === 'WOOD_LOG') {
            giveForestryXP({ treeType: 'Tree' });
        } else if (item === 'OAK_LOG') {
            giveForestryXP({ treeType: 'Oak Tree' });
        }
    };

    return (
        <div className="grid grid-cols-4 gap-4">
            <TreeButton onClick={handleClick} />
            <OakTreeButton onClick={handleClick} />
        </div>
    );
}
