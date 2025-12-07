import { usePlayerActions } from '@root/stores/usePlayerStore';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/skills')({
    component: RouteComponent,
});

function RouteComponent() {
    const { forestryXP, forestryLevel, forestryXPToNextLevel } =
        usePlayerActions().getForestryData();

    const { miningXP, miningLevel, miningXPToNextLevel } =
        usePlayerActions().getMiningData();
    return (
        <div>
            <h2>Forestry Skill</h2>
            <p>Level: {forestryLevel}</p>
            <p>XP: {forestryXP}</p>
            <p>XP to Next Level: {forestryXPToNextLevel}</p>
            <br />
            <h2>Mining Skill</h2>
            <p>Level: {miningLevel}</p>
            <p>XP: {miningXP}</p>
            <p>XP to Next Level: {miningXPToNextLevel}</p>
        </div>
    );
}
