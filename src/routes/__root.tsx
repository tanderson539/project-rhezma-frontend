import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const RootLayout = () => (
    <>
        <div className="bg-main" />
        <Outlet />
        <TanStackRouterDevtools />
    </>
);

export const Route = createRootRoute({ component: RootLayout });
