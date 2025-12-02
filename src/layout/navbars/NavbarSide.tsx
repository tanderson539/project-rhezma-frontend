import { Link } from '@tanstack/react-router';
import type { NavItem } from '../../types/GlobalTypes';

const navItems: NavItem[] = [
    { to: '/', label: 'Home', icon: '🏠' },
    { to: '/about', label: 'About', icon: '📊' },
    { to: '/city', label: 'City', icon: '🏙️' },
    { to: '/forest', label: 'Forest', icon: '🌲' },
];

const NavbarSide = () => {
    return (
        <aside className="h-full w-48 border-r border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-8 text-xl font-bold text-indigo-700 dark:text-indigo-400">
                Project Rhezma
            </div>

            <nav className="space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.to}
                        to={item.to}
                        className="flex items-center space-x-3 rounded-lg p-3 text-sm font-medium text-gray-700 transition duration-150 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    >
                        {({ isTransitioning }) => (
                            <>
                                <span className="text-lg">{item.icon}</span>
                                <span>{item.label}</span>

                                {isTransitioning && (
                                    <span className="ml-auto text-xs opacity-50">
                                        ...
                                    </span>
                                )}
                            </>
                        )}
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default NavbarSide;
