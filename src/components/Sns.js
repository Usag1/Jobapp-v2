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
                <div className='sns-logos'>
                    <ul>
                        <li><a href='#' ><FontAwesomeIcon icon={['fab', 'instagram'] } className='s-logo instagram' /></a></li>
                        <li><a href='#' ><FontAwesomeIcon icon={['fab', 'twitter']} className='s-logo twitter' /></a></li>
                        <li><a href='#' ><FontAwesomeIcon icon={['fab', 'youtube']} className='s-logo youtube' /></a></li>  
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Sns;