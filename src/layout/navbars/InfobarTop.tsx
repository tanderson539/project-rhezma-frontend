import { usePlayerStore } from '@root/stores/usePlayerStore';
import { useResourceStore } from '@root/stores/useResourceStore';
import { useShallow } from 'zustand/shallow';

const InfobarTop = () => {
    const { woodAmt, stoneAmt, ironAmt } = useResourceStore(
        useShallow((state) => ({
            woodAmt: state.resources.woodAmt,
            stoneAmt: state.resources.stoneAmt,
            ironAmt: state.resources.ironAmt,
        }))
    );

    const username = usePlayerStore(
        useShallow((state) => {
            return state.player.username;
        })
    );
    return (
        <div className="flex p-2">
            <h4>
                {username} -- Wood: {woodAmt} | Stone: {stoneAmt} | Iron:{' '}
                {ironAmt}
            </h4>
        </div>
    );
};

export default InfobarTop;
