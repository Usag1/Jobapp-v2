import React, { Component } from 'react';
import Jobpost from './Jobpost';

class Main extends Component {
    render(){
        const jobpostList = [
            {
                position:'Frontend Developer',
                company:'Usagi',
                address:'Copenhagen, Denmark',
                image:'https://image.freepik.com/free-vector/circular-colorful-logo-with-initial-u_1017-1719.jpg',
                introduction:'We are looking for a frontend developer.'
            },
            {
                position:'Backend Developer',
                company:'Kuma',
                address:'Tokyo, Japan',
                image:'https://marketing.dcassetcdn.com/blog/2019/05/51-letter-k-logos/images/Sharp.jpg',
                introduction:'We are looking for a backend developer.'
            },
            {
                position:'Sales',
                company:'Neko',
                address:'London, UK',
                image:'https://st2.depositphotos.com/3867453/7058/v/950/depositphotos_70587251-stock-illustration-letter-n-logo-icon-design.jpg',
                introduction:'We are looking for a sales person.'
            },
            {
                position:'Marketing',
                company:'Inu',
                address:'Singapore, Singapore',
                image:'http://www.logologo.com/logos/3d-i-logo.jpg',
                introduction:'We are looking for a marketing expert.'
            },
        ];

        return(
            <div className='home-content wrapper'>
                <div className='home'>
                   <div className='copy-container'>
                        <h1 className='page-title'>Find your destination!</h1>
                        <p>Are you ready to find crews to travel with?</p>   
                   </div> 
                   <div className='jobpost-container'>
                        <h3 className='section-title'>jobs found</h3>
                        {jobpostList.map((jobpostItem)=>{
                            return(
                                <Jobpost
                                    position={jobpostItem.position}
                                    company={jobpostItem.company}
                                    address={jobpostItem.address}
                                    image={jobpostItem.image}
                                    introduction={jobpostItem.introduction}
                                />
                            ); 
                        })}
                   </div>
                </div> 
            </div>
        ); 
    }
}

export default Main;