import React from 'react';

export default class Rankings extends React.Component{
    render(){
        return(
            <div className="container">
            
            <div className="jumbotron">
             <h1 className="display-4">The Rankings</h1>
             <p className="lead">This is a page where you will be able to view the full details of your rankings</p>
             <hr className="my-4" />
            <p>We will analyse the information that you provide from personal information,academic qualification,language details,work experince,and social activities while giving you the rank.So please complete all the above section to stand a better ranking</p>
            <hr className="my-4" />
            <p className="lead">How does it works?
            </p>
            <p>As companies are looking people basing on what they know,that is why we came up with this rating for each section
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