const { Component } = require("react");

import React, { Component } from 'react';

class AboutUs extends Component {
    render() { 
        return (  
            <div className='aboutUs wrapper'>
                <header className='page-header wrapper'>
                    <h1><a href='App.js'><img className='logo' src='' alt='Remotify'/></a></h1>
                    <Navbar />
                </header>
            </div>
        );
    }
}
 
export default AboutUs;