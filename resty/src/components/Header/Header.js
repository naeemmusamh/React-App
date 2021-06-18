import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = (props)=>{
    return (
        <header>
            <h1> RESTy </h1>
            <span>
                <ul>
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/History"> History </Link> 
                    </li>
                    <li>
                        <Link to="/Help"> Help </Link>
                    </li>
                </ul>
            </span>
        </header>
    )
}

export default Header;