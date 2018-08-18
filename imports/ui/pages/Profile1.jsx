import React from 'react';
import { Redirect } from 'react-router-dom';
import PaymentForm from '../components/PaymentForm.jsx';

export default class Profile extends React.Component{
    constructor(){
        super();
        this.state={
            viewcard:false,
            redirect:false
        }
    }

    changeCardView(e){
        e.preventDefault()
        this.setState({
            viewcard:!this.state.viewcard
        })
    }
   
    render(){
        return(
            
  <div className="container">
  <div className="row">
    <div className="col-md-12 center page-title-box">
    <p className="h1 text-center mb-4" style={{paddingBottom:'10px'}}>Jennah Haque's profile</p>
    </div>
  </div>
  <div className="row margin-bottom-100">
    <div className="col-md-offset-2 col-md-3"> 
      <img src="http://gsl.mit.edu/media/cache/a3/84/a384cf01d51312e1c7bbbed092dbcc22.jpg" width="100" height="100" className="img-rounded" />
	<h3>Affiliation</h3>
	<p><a href="/partner/2/">Massachusetts Institute of Technology</a></p>	
	<h3>Nickname</h3>
	<p>Jennah</p>
	<h3>Resume</h3>
	<p><a href="http://gsl.mit.edu/media/user/resumes/1792/Jennah Haque Resume 2018_2.pdf">PDF</a></p>
    </div>
    <div className="col-md-4">
      <h3>Home</h3>
      <p>
      Cambridge,
       United States</p>
      <h3>Homepage</h3>
      <p><a href="https://www.linkedin.com/in/jennah-haque-20a19814b/">https://www.linkedin.com/in/jennah-haque-20a19814b/</a></p>
      <h3>Bio</h3>
      <p>Jennah is an undergraduate student studying Computer Science, Data Science, and Economics at MIT. She's also pursuing a minor in Political Science. Jennah has worked as a Marketing and Data Analytics for Embr Labs (an MIT founded start up based in Somerville) for 6 months now. She is interested in melding technology and humanities in the business and political spheres. Outside of school, she plays on the field hockey team at MIT, is affiliated with Alpha Phi sorority, records a podcast, and loves writing. </p>
      <h3>Skills</h3>
        <ul>
            <li>Python</li>
            <li>Julia</li>
            </ul>
       <h3>Experience</h3>
       <ul>
            <li>She worked as Technical Assistant Instructor in GSL Rwanda Summer 2018 for several months</li>
            <li>She became President, Las Manos Unidas (spanish-speaking community service club</li>
            <li>She became Captain, Mock Trial Team</li>
            </ul>
            
    </div>
    <div className="col-md-3">  
      <h3>Technical Assistant Instructor</h3>
      <button type="button" className="btn btn-raised btn-primary" onClick={this.changeCardView.bind(this)}>Hire</button>
  {this.state.viewcard?
  <PaymentForm /> :""}


{ this.state.redirect ? <Redirect  to={ {pathname: "/recruit"}}/>: ""}

	

    </div>  
  </div>
  </div>
        )
    }
}