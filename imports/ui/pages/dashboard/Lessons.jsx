import React from 'react';

export default class Lessons extends React.Component{
    render(){
        return(
            <div className="container">
             <div className="jumbotron">
             <h1 className="display-4">The Lessons</h1>
             <p className="lead">This is a page where you will be able to view the full details of your recommended lessons</p>
             <hr className="my-4" />
            <p>Our system is able to analyse and find the gaps in your portfolio may need to take lessons.This the lessons that we are going to recommend and make them available easily.We highly recommend you to take the lessons because they are the one to improve your rank</p>
            <hr className="my-4" />
            <p className="lead">How does it works?
            </p>
            <p>To make sure we recommend you the right lessons we try to analyse the requirements of the jobs you are able to do and also look the information you provided in:
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