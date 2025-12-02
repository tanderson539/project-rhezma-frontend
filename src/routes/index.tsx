import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
    component: Index,
});

function Index() {
    return (
        <main className="site-body primary-bg">
            <div className="absolute min-h-screen w-full md:max-w-6xl xl:max-w-7xl">
                <section className="text-primary secondary-bg min-h-3-4-screen items-center justify-center px-6 py-12 opacity-90">
                    wassupppp
                </section>
            </div>
        </main>
    );
}
