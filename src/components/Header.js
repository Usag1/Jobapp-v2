import React, { Component } from 'react';
import Navbar from './Navbar';

class Header  extends Component {
    render() { 
        return ( 
            <header className='page-header wrapper'>
                <h1><a href='App.js'><img className='logo' src='https://bcassetcdn.com/asset/logo/9ba29177-d8b1-466d-a08f-e1990cb81893/logo?v=4&text=Logo+Text+Here' alt='Jobapp Home'/></a></h1>
                <Navbar />
            </header>
         );
    }
}
 
export default Header;