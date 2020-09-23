import React, { Component } from 'react';

class Sns extends Component {
    render() { 
        return (
            <div className='sns'>
                <p>Follow Me!</p> 
                <a href='' className='btn instagram'><span className='fab fa-instagram'></span></a>
                <a href='https://github.com/Usag1' className='btn github'><span className='fab fa-github'></span></a>
                <a href='#' className='btn youtube'><span className='fab fa-youtube'></span></a>
            </div>
        );
    }
}
 
export default Sns;