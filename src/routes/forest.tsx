import { createFileRoute } from '@tanstack/react-router';
import TreeButton from '@components/forestry/buttons/TreeButton';
import OakTreeButton from '@components/forestry/buttons/OakTreeButton';
import { useResourceStore } from '@root/stores/useResourceStore';

export const Route = createFileRoute('/forest')({
    component: RouteComponent,
});

function RouteComponent() {
    const addResource = useResourceStore((state) => {
        return state.addResource;
    });

    const handleClick = (amt: number) => {
        addResource('woodAmt', amt);
    };

    return (
        <div className="grid grid-cols-4 gap-4">
            <TreeButton onClick={handleClick} />
            <OakTreeButton onClick={handleClick} />
        </div>
    );
}
