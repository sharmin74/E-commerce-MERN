import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useStateValue } from '../../StateProvider';

function Header() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='header'>
            <div className='header__left'>
                <Link className='link' to='/'>
                    <div className='header__logo'>LOGO</div>
                </Link>
                <div className='header__address'>
                    <small>Deliver to NAME</small>
                    <p>Mumbai 400102</p>
                </div>
            </div>
            <div className='header__search'>
                <input className='header__searchInput' type="text" name="searchBar"/>
                <SearchIcon className='header__searchIcon'></SearchIcon>
            </div>
            <div className='header__nav'>
                <div className='header__logIn'>
                    <small>Hello, sign in</small>
                    <p>Log in</p>
                </div>
                <div className='header__orders'>
                    <small>Returns</small> 
                    <p>& Orders</p>
                </div>
                <Link className='link' to='/shoppingCart'>
                    <div className='header__cart'>
                        <div className='header__cartBadge'>{basket?.length}</div>
                        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>Cart
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
