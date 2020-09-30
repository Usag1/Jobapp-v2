import React, { Component } from 'react';
import Sns from './Sns';
class Footer extends Component {
    render() { 
        return ( 
            <div className='footer wrapper'>
                <p><small>&copy; 2020 Karin Ikenaga</small></p>
                <Sns />
            </div>
        );
    }
}
 
export default Footer;