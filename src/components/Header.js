import '../assets/styles/Header.scss';
import { useState } from 'react';

const Header = ()=>{
    const [menu, setMenu] = useState(false);

    const handleMenu = ()=>{
        setMenu(!menu);
    }
    return(
            <nav className={`${menu ? 'change' : ''}${ ' navbar' }`}>
                <div className='hamburger-menu' onClick={handleMenu}>
                    <div className='line line-1'></div>
                    <div className='line line-2'></div>
                    <div className='line line-3'></div>
                </div>
            </nav>
    )
}

export default Header;