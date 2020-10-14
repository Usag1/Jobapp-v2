import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser} from '@fortawesome/free-solid-svg-icons';
library.add(faUser)

class Navbar extends Component {
    render() { 
        return ( 
            <nav>
                <ul className='main-nav'>
                    <li><a href='App.js'>Home</a></li>
                    <li><a href='About.js'>About</a></li>
                    <li><a href='Contact.js'>Contact</a></li>
                    <li><a href='#' ><FontAwesomeIcon icon={['fas', 'user']} className='s-logo user' /></a></li>
                </ul>
            </nav>
         );
    }
}
 
export default Navbar;