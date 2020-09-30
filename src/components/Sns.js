import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab);
class Sns extends Component {
    render() { 
        return (  
            <div className='sns'>
                <p>Follow Us!</p>
                <div className='sns-logo'>
                    <a href='#' className='logo instagram'><FontAwesomeIcon icon={['fab', 'instagram']} color='#11999e' /></a>
                    <a href='#' className='logo twitter'><FontAwesomeIcon icon={['fab', 'twitter']} color='#11999e' /></a>
                    <a href='#' className='logo youtube'><FontAwesomeIcon icon={['fab', 'youtube']} color='#11999e' /></a>  
                </div>
            </div>
        );
    }
}
 
export default Sns;