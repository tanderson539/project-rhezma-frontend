import { Link } from '@tanstack/react-router';

const NavbarTop = () => {
    return (
        <div className="flex gap-2 p-2">
            <Link to="/" className="[&.active]:font-bold">
                Home
            </Link>{' '}
            <Link to="/about" className="[&.active]:font-bold">
                About
            </Link>
        </div>
    );
};

export default NavbarTop;
