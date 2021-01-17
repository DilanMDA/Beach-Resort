//class base components bcz we do toggling
import React, { Component } from 'react';
import Logo from '../images/logo.js'
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return (
            <nav className='navbar'>
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to='/'>
                            <Logo />
                            <button type='button' className='nav-btn'>
                                <FaAlignRight className='nav-icon' 
                                onClick = {this.handleToggle}/>
                            </button>
                        </Link>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/rooms">Rooms</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
