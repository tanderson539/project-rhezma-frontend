import type { FC } from 'react';

interface Props {
    item: {
        key: string;
        name: string;
        count: number;
    };
}

const ItemListItem: FC<Props> = ({ item }) => {
    return (
        <div
            key={item.key}
            className="flex items-center justify-between rounded-lg bg-gray-800 p-4 shadow-md"
        >
            <h3 className="text-xl font-semibold text-teal-400">{item.name}</h3>
            <p className="text-gray-300">
                <span className="text-2xl font-bold">{item.count}</span>
            </p>
        </div>
    );
};

export default ItemListItem;
