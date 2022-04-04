import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/home'>Home</Link>
            <Link to ='/reviews'>Reviews</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/dashboard'>DashBoard</Link>

        </div>
    );
};

export default Header;