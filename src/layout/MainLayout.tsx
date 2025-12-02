import { type FC, type ReactNode } from 'react';
import NavbarTop from './NavbarTop';

interface Props {
    children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <div className="bg-main" />
            <main className="site-body primary-bg">
                <div className="absolute min-h-screen w-full md:max-w-6xl xl:max-w-7xl">
                    <section className="text-primary secondary-bg min-h-3-4-screen items-center justify-center px-6 py-12 opacity-90">
                        <NavbarTop />
                        <hr />
                        {children}
                    </section>
                </div>
            </main>
        </>
    );
};

export default MainLayout;
