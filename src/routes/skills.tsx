import { useGetForestryData } from '@root/stores/usePlayerStore';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/skills')({
    component: RouteComponent,
});

function RouteComponent() {
    const { forestryXP, forestryLevel, forestryXPToNextLevel } =
        useGetForestryData();
    return (
        <div>
            <h2>Forestry Skill</h2>
            <p>Level: {forestryLevel}</p>
            <p>XP: {forestryXP}</p>
            <p>XP to Next Level: {forestryXPToNextLevel}</p>
        </div>
    );
}
