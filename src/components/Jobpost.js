import React, { Component } from 'react';
import Pulse from 'react-reveal/Pulse';

class Jobpost extends Component {
    render() { 
        return ( 
           <Pulse>
                <div className='jobpost-card'>
                    <div className='jobpost-item'>
                        <h2 className='position'>{this.props.position}</h2>
                        <h3 className='company'>{this.props.company}</h3>
                        <h3 className='adress'>{this.props.address}</h3>
                        <h4 className='discription'>{this.props.description}</h4>
                        <img src={this.props.image} />
                    </div>
                </div>
            </Pulse>
         );
    }
}
 

export default Jobpost;