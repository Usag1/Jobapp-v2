import React, { Component } from 'react';
import Sns from './Sns';

class Footer extends Component {
    render() { 
        return ( 
            <Footer>
                <div className='wrapper'>
                    <p><small>&copy; 2020 Karin Ikenaga</small></p>
                    <Sns />
                </div>
            </Footer> 
        );
    }
}
 
export default Footer;