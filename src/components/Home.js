import React, { Component } from 'react';
import Header from './Header';

class Home extends Component {
    render() { 
        return (
            <div className='home big-bg'>
                <Header />  
                <div className='home-content wrapper'>
                        <h1 className='page-title'>Find your destination</h1>
                        <p>Are you ready to find crews to travel with?</p>
                        <a className='button' href='Main.js'>Go Remote!</a>  
                </div>
            </div>
        );
    }
}
 
export default Home;