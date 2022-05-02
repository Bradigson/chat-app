import '../assets/styles/Header.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = ()=>{
    const [menu, setMenu] = useState(false);
    const [user, setUser] = useState(
        localStorage.getItem('user')
    )

    const handleMenu = ()=>{
        setMenu(!menu);
    }
    const userFersLetter = user.slice(0,1).toUpperCase();
    return(
            <nav className={`${menu ? 'change' : ''}${ ' navbar' }`}>
                <div className='hamburger-menu' onClick={handleMenu}>
                    <div className='line line-1'></div>
                    <div className='line line-2'></div>
                    <div className='line line-3'></div>
                </div>
                
                <div className='users-container'>
                    <div className='header-users'>
                        <div>
                            <h2>User aname</h2>
                        </div>
                        <div className='user-phoro'>
                            <h4>{userFersLetter}</h4>
                        </div>
                    </div>

                    <div className='search'>
                        <div className="input-group mb-3">
                            <span className="input-group-text text-muted" id="basic-addon1"><i className='bx bx-search-alt-2' ></i></span>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        
                    </div>

                    <div className='users'>
                        <ul>
                            <li>
                                <NavLink to='#'className='nav-link'>
                                    <div className='logo-user'>
                                        <h4>B</h4>
                                    </div>
                                    <div>
                                        <h3>User name</h3>
                                        <span className='text-dark text-muted'>online</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='#'className='nav-link'>
                                    <div className='logo-user'>
                                        <h4>B</h4>
                                    </div>
                                    <div>
                                        <h3>User name</h3>
                                        <span className='text-dark text-muted'>offline</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='#'className='nav-link'>
                                    <div className='logo-user'>
                                        <h4>B</h4>
                                    </div>
                                    <div>
                                        <h3>User name</h3>
                                        <span className='text-dark text-muted'>online</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='#'className='nav-link'>
                                    <div className='logo-user'>
                                        <h4>B</h4>
                                    </div>
                                    <div>
                                        <h3>User name</h3>
                                        <span className='text-dark text-muted'>offline</span>
                                    </div>
                                </NavLink>
                            </li>
                            
                          
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Header;