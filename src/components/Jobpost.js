import React, { Component } from 'react';
import Pulse from 'react-reveal/Pulse';

class Jobpost extends Component {
    constructor(props) {
        super(props);
        this.state = {isModalOpen: false};
    }

    // Modal //
    handleClickJobpost() {
        this.setState({isModalOpen: true});
    }

    handleClickClose(){
        this.setState({isModalOpen: false});
    }



    render() { 
        let modal;
        if (this.state.isModalOpen) {
            modal = (
                <div className='modal'>
                    <div className='modal-inner'>
                        <div className='modal-header'></div>
                        <div className='modal-introduction'>
                            <h2>{this.props.position}</h2>
                            <h3>{this.props.company}</h3>
                            <h3>{this.props.address}</h3>
                            <img src={this.props.image} />
                            <p>{this.props.introduction}</p>
                        </div>
                        <button className='modal-close-btn'
                                onClick={() => {this.handleClickClose()}}
                        >
                         
                            Close
                        </button>
                    </div> 
                </div>
            )
        }


        return ( 
           <Pulse>
                <div className='jobpost-card'>
                    <div className='jobpost-item' 
                         onClick={() => {this.handleClickJobpost()}}>
                        <h2>{this.props.position}</h2>
                        <h3>{this.props.company}</h3>
                        <h3>{this.props.address}</h3>
                        <img src={this.props.image} />
                    </div>
                    {modal}
                </div>
            </Pulse>
         );
    }
}
 

export default Jobpost;