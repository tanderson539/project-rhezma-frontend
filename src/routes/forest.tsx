import { createFileRoute } from '@tanstack/react-router';
import TreeButton from '@components/forestry/buttons/TreeButton';
import OakTreeButton from '@components/forestry/buttons/OakTreeButton';
import type { ItemKey } from '@root/game/items/Item_Catelog';
import { usePlayerActions } from '@root/stores/usePlayerStore';
import { useItemActions } from '@root/stores/useItemStore';

export const Route = createFileRoute('/forest')({
    component: RouteComponent,
});

function RouteComponent() {
    const { addItem } = useItemActions();

    const { performForestryAction } = usePlayerActions();

    const handleClick = (item: ItemKey, amt: number) => {
        addItem(item, amt);

        if (item === 'WOOD_LOG') {
            performForestryAction({ treeType: 'Tree' });
        } else if (item === 'OAK_LOG') {
            performForestryAction({ treeType: 'Oak Tree' });
        }
    };

    return (
        <div className="grid grid-cols-4 gap-4">
            <TreeButton onClick={handleClick} />
            <OakTreeButton onClick={handleClick} />
        </div>
    );
}
