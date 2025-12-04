import type { NavItem } from '../../game/types/GlobalTypes';
import NavLink from './NavLink';

const navItems: NavItem[] = [
    { to: '/', label: 'Home', icon: '🏠' },
    { to: '/about', label: 'About', icon: '📊' },
    { to: '/city', label: 'City', icon: '🏙️' },
    { to: '/forest', label: 'Forest', icon: '🌲' },
    { to: '/skills', label: 'Skills', icon: '🛠️' },
];

const NavbarSide = () => {
    return (
        <aside className="h-full w-48 border-r border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
            <div className="mb-8 text-xl font-bold text-indigo-700 dark:text-indigo-400">
                Project Rhezma
            </div>

            <nav className="flex flex-col items-center space-y-2">
                {navItems.map((item) => (
                    <NavLink item={item} />
                ))}
            </nav>
        </aside>
    );
};

export default NavbarSide;
