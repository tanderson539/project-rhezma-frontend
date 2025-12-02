import { type FC, type ReactNode } from 'react';
import InfobarTop from './navbars/InfobarTop';
import NavbarSide from './navbars/NavbarSide';

interface Props {
    children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <div className="bg-main fixed" />
            <main className="site-body primary-bg min-h-screen">
                <div className="flex min-h-screen w-full md:max-w-6xl xl:max-w-7xl">
                    <NavbarSide />

                    <section className="text-primary secondary-bg min-h-3-4-screen flex flex-1 flex-col rounded-r-lg opacity-90 shadow-2xl">
                        <header>
                            <InfobarTop />
                        </header>
                        <div className="flex-1 overflow-y-auto px-2">
                            <hr className="my-4 border-gray-300 dark:border-gray-700" />
                            {children}
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default MainLayout;
