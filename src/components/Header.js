import React, { Component } from 'react';
import Navbar from './Navbar';

class Header  extends Component {
    render() { 
        return ( 
            <header className='page-header wrapper'>
                <h1><a href='App.js'><img className='logo' src='' alt='Remotify'/></a></h1>
                <Navbar />
            </header>
         );
    }
}
 
export default Header;