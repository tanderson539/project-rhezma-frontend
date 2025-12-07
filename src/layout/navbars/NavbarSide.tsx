import type { NavItem } from '../../game/types/GlobalTypes';
import NavList from '@components/common/lists/NavList';

const cityNavItems: NavItem[] = [
    { to: '/', label: 'Home', icon: '🏠' },
    { to: '/city', label: 'City', icon: '🏙️' },
    { to: '/storage', label: 'Storage', icon: '🧺' },
];

const playerNavItems: NavItem[] = [
    { to: '/skills', label: 'Skills', icon: '🛠️' },
];

const resourceNavItems: NavItem[] = [
    { to: '/forest', label: 'Forest', icon: '🌲' },
    { to: '/mine', label: 'Mine', icon: '⛏️' },
];

const miscNavItems: NavItem[] = [
    { to: '/about', label: 'About', icon: '📊' },
    { to: '/settings', label: 'Settings', icon: '📊' },
];

const NavbarSide = () => {
    return (
        <aside className="h-full w-48 border-r border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
            <div className="mb-8 text-lg font-bold text-indigo-700 dark:text-indigo-400">
                Project Rhezma
            </div>

            <nav>
                <NavList list={cityNavItems} sectionTitle="City" />
                <NavList list={resourceNavItems} sectionTitle="Resources" />
                <NavList list={playerNavItems} sectionTitle="Player" />
                <NavList list={miscNavItems} sectionTitle="Misc." />
            </nav>
        </aside>
    );
};

export default NavbarSide;
