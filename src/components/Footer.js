import React, { Component } from 'react';
import Sns from './Sns';
class Footer extends Component {
    render() { 
        return ( 
            <div className='footer wrapper'>
                <div className='footer-left'>
                    <h1><a href='App.js'><img className='logo' src='' alt='Remotify'/></a></h1>
                    <p><small>&copy; 2020 Karin Ikenaga</small></p>
                </div>
                <div className='page-list'>
                    <ul>
                        <li>Home</li>
                        <li>About Remotify</li>
                        <li>About Us</li>
                        <li>Find Jobs</li>
                        <li>Post Jobs</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <Sns />
            </div>
        );
    }
}
 
export default Footer;