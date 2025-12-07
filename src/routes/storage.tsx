import ItemListItem from '@components/storage/ItemListItem';
import { useDisplayItems } from '@root/stores/useItemStore';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/storage')({
    component: RouteComponent,
});

function RouteComponent() {
    const displayItems = useDisplayItems();

    return (
        <div className="min-h-screen p-4 text-white">
            <h1 className="mb-6 border-b border-gray-700 pb-3 text-3xl font-bold">
                City Resources
            </h1>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {displayItems.length === 0 ? (
                    <p className="col-span-2 text-gray-400">
                        Your inventory is empty!
                    </p>
                ) : (
                    displayItems.map((item) => (
                        <ItemListItem key={item.key} item={item} />
                    ))
                )}
            </div>
        </div>
    );
}
