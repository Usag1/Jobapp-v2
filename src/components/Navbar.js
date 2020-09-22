import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        return ( 
            <nav>
                <ul className='main-nav'>
                    <li><a href='App.js'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </nav>
         );
    }
}
 
export default Navbar;