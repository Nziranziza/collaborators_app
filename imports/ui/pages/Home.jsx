import React from 'react';
import { Meteor } from 'meteor/meteor';
import Homepage from '../pages/Homepage.jsx';
import SignupLogin from '../pages/SignupLogin.jsx'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
//form function
class Homeform extends TrackerReact(React.Component) {
  
  render(){
  
return (   
Meteor.user() ?  < Homepage />:
<div className="container">
<div className="row content">
      <h1>Welcome to Our Platform</h1>
      <p><big>Get a Job or an employee with Collaborators</big></p> 
<div className="col-sm-4" >
<SignupLogin />
  </div>
<div className="col-sm-8">
<p className="h4 text-center mb-4" style={{paddingBottom:'10px'}}>Potential Job seekers good for your Job</p>
<div className="col-md-3 ins-vcard">
<a href="/recruit/profile1">
  <img className="img-circle" src="http://gsl.mit.edu/media/cache/90/37/90374362e74050b208565056391c9d80.jpg" width="150" height="150" />
  <p className="ins-fullname">Jennah Haque</p>
</a>
  <p className="ins-position">Technical Assistant</p>
  <p className="ins-affiliation">Massachusetts Institute of Technology</p>
</div>
<div className="col-md-3 ins-vcard">
<a href="/recruit/profile2">
  <img className="img-circle" src="http://gsl.mit.edu/media/cache/74/65/746529893daccdd9989e58ec6aa06a1a.jpg" width="150" height="150" />
  <p className="ins-fullname">Wataru Doita</p>
</a>
  <p className="ins-position">Entrepreneurship Lead</p>
  <p className="ins-affiliation">Massachusetts Institute of Technology</p>
</div>
<div className="col-md-3 ins-vcard">
<a href="/recruit/profile3">
  
  <img className="img-circle" src="http://gsl.mit.edu/media/cache/de/ac/deacf6c048530f2b57015729ff61ed04.jpg" width="150" height="150"/>
  <p className="ins-fullname">Kosi Aroh</p>
</a>
  <p className="ins-position">Technical Lead</p>
  <p className="ins-affiliation">Massachusetts Institute of Technology</p>
</div>
<div className="col-md-3 ins-vcard">
<a href="/recruit/profile4"> 
  <img className="img-circle" src="http://gsl.mit.edu/media/cache/0a/c5/0ac516d1c080e04c54df44b4dbf2a0ec.jpg" width="150" height="150"/>
  <p className="ins-fullname">Tosin Bosede</p>
</a>
  <p className="ins-position">Entrepreneurship Lead</p>
  <p className="ins-affiliation">Massachusetts Institute of Technology</p>
</div>

<p className="h5 text-center mb-4" style={{paddingBottom:'10px'}}><a href="/recruit">Click for more Job Seekers</a></p>
<hr/>
<p className="h4 text-center mb-4" style={{paddingBottom:'10px'}}>Look at the different jobs awaiting for you</p>
<div className="col-md-3 ins-vcard">
<a href="/recruit/profile4"> 
  <img className="img-rounded" src="http://www.nirasfraenkel.com/~/media/Images/NIRAS-COM/jobs/Jobs-frontpage2-COM-550x210.ashx" width="150" height="150"/>
  <p className="ins-fullname">PositivoBGH Rwanda</p>
</a>
  <p className="ins-position">Part time</p>
  <p className="ins-affiliation">IT Technician to repair the computers</p>
</div>
<div className="col-md-3 ins-vcard">
<a href="/accounts/1756/"> 
  <img className="img-rounded" src="https://pbs.twimg.com/profile_images/432917051405922305/we7_rZJn_400x400.png" width="150" height="150"/>
  <p className="ins-fullname">University of Rwanda</p>
</a>
  <p className="ins-position">Full Time</p>
  <p className="ins-affiliation">Electrician</p>
</div>
<div className="col-md-3 ins-vcard">
<a href="/accounts/1756/"> 
  <img className="img-rounded" src="http://www.nirasfraenkel.com/~/media/Images/NIRAS-COM/jobs/Jobs-frontpage2-COM-550x210.ashx" width="150" height="150"/>
  <p className="ins-fullname">Bank of Kigali</p>
</a>
  <p className="ins-position">Part time</p>
  <p className="ins-affiliation">IT Technician to repair the computers</p>
</div>
<div className="col-md-3 ins-vcard">
<a href="/accounts/1756/"> 
  <img className="img-rounded" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Airtel_Sri_Lanka_logo.svg/250px-Airtel_Sri_Lanka_logo.svg.png" width="150" height="150"/>
  <p className="ins-fullname">Airtel Rwanda</p>
</a>
  <p className="ins-position">Full Time</p>
  <p className="ins-affiliation">IT Technicians and Programmer</p>
</div>
<div>
<p className="h5 text-center mb-4" ><a href="/recruit">Click for more Job Announcements</a></p>
</div>

  </div>
  </div>
  </div>   
  
  );
}
}
export default class Home extends React.Component{
  render(){
  return(
        <div>
          <Homeform />
        </div>
     );
  }
}