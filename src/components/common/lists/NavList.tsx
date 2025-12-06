import type { NavItem } from '@root/game/types/GlobalTypes';
import type { FC } from 'react';
import NavLabel from '../labels/NavLabel';
import NavLink from '@root/layout/navbars/NavLink';

interface Props {
    list: NavItem[];
    sectionTitle: string;
    className?: string;
}

const NavList: FC<Props> = ({ list, sectionTitle, className }) => {
    return (
        <div className={`${className}`}>
            <NavLabel text={sectionTitle} />
            <div className="flex flex-col items-center space-y-2">
                {list.map((item) => (
                    <NavLink item={item} key={item.label} />
                ))}
            </div>
        </div>
    );
};

export default NavList;
