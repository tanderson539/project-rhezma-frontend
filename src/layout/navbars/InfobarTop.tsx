import { useGetUsername } from '@root/stores/usePlayerStore';
//import { useDisplayInventory } from '@root/stores/useItemStore';

const InfobarTop = () => {
    //const displayItems = useDisplayInventory();

    const username = useGetUsername();

    return (
        <div className="flex p-2">
            <h4>{username}</h4>
        </div>
    );
};

export default InfobarTop;
