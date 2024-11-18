import React from 'react';
import { Link, useLocation } from 'react-router-dom';


function Header() {
    const location = useLocation();
    
    const getPageName = () => {
        switch (location.pathname) {
          
            case '/favorites':
                return 'Favorites';
            case '/login':
                return 'Login';
            case '/add-recipe':
                return 'Add Recipe';
            default:
                return 'Recipe Manager';
        }
    };
        return (
            <header className='header'>
                <nav className='navbar'>
                    <Link to='/' className='logo'>
            
                    </Link>
                    <ul className='nav-links'>
                        <li>
                            <Link to='/'>Home</Link></li>
                            <Link to='/favorites'>Favorites</Link>
                            <Link to='/login'>Login</Link>
                            <Link to='/add-recipe'>Add Recipe</Link>
                    </ul>       
                </nav>
        <div className='page-name'>
            <h2>{getPageName()}</h2>
         </div>

       </header>
        );
}   

export default Header