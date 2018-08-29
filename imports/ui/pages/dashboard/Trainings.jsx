import React from 'react';

export default class Trainigs extends React.Component{
    render(){
        return(
            <div className="container">
             <div className="jumbotron">
             <h1 className="display-4">The Trainings</h1>
             <p className="lead">This is the page where you will be able to view all the details of your trainings.</p>
             <hr className="my-4" />
            <p>Basing on the nature of the job practical trainings become more necessary.This is why we want to have in-person trainings and this will help people with practical workers and hence improving their experience on the work.</p>
            
            <hr className="my-4" />
            <p className="lead">How does it works?
            </p>
            <p>To make sure we recommend you the right trainings we try to analyse the requirements of the jobs you are able to do and also look the information you provided in:
            <ol>
                <li>Academic qualification</li>
                <li>Work Experience</li>
                <li>Education Information</li>
                <li>Social Activities</li>
                <li>Language Details</li>
            </ol>
            </p>
            <aside>We always love improvement that is why we are still working on this page if you have any comment or suggestion send it to us on nziranzizadaniel@gmail.com</aside>
            
            </div>
            </div>
        )
    }
}