import { createFileRoute } from '@tanstack/react-router';
import TreeButton from '../components/buttons/TreeButton';

export const Route = createFileRoute('/forest')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className="grid grid-cols-4 gap-4">
            <TreeButton />
            <TreeButton />
            <TreeButton />
        </div>
    );
}
