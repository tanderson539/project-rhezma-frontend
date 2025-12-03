import { Link } from '@tanstack/react-router';
import type { FC } from 'react';
import type { NavItem } from 'types/GlobalTypes';

interface Props {
    item: NavItem;
}

const NavLink: FC<Props> = ({ item }) => {
    return (
        <Link
            key={item.to}
            to={item.to}
            className="crosshair flex w-44 grow items-center space-x-3 rounded-lg bg-[#1e2939] p-3 text-sm font-medium text-white shadow-md"
        >
            {({ isTransitioning }) => (
                <>
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>

                    {isTransitioning && (
                        <span className="ml-auto text-xs opacity-50">...</span>
                    )}
                </>
            )}
        </Link>
    );
};

export default NavLink;
