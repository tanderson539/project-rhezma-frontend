import { useItemActions } from '@root/stores/useItemStore';
import { usePlayerActions } from '@root/stores/usePlayerStore';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/settings')({
    component: RouteComponent,
});

function RouteComponent() {
    const resetItems = useItemActions().reset;
    const resetPlayer = usePlayerActions().reset;

    return (
        <div className="p-4 text-white">
            <button
                className="mr-4 rounded-lg bg-blue-600 px-4 py-2 text-white transition duration-150 hover:bg-blue-700"
                onClick={resetPlayer}
            >
                RESET SKILLS
            </button>
            <button
                className="rounded-lg bg-blue-600 px-4 py-2 text-white transition duration-150 hover:bg-blue-700"
                onClick={resetItems}
            >
                RESET ITEMS
            </button>
        </div>
    );
}
