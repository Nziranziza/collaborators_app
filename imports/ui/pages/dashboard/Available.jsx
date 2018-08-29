import React from 'react';

export default class Available extends React.Component{
    render(){
        return(
            <div className="container">
            <div className="jumbotron">
             <h1 className="display-4">The Availability</h1>
             <p className="lead">This section is where you will be able to change your availability status</p>
             <hr className="my-4" />
            <p>We assign you a job basing on your status once you said that you are available we will post you on our recruit page and assign you a job by the matching system</p>
            <div className="danger">
            <p><strong>Note:</strong> Changing your availability status doesn't mean that you will be posted in the in the recruit page.We want you to complete your profile and stand a better rank and then we will be able to post you.</p>
            </div>
            </div>
            </div>
        )
    }
}