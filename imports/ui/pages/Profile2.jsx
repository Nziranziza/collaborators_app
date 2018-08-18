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
    confirmPayment(e){
        e.preventDefault();
        alert("The Transaction is successful!!!");
        this.setState({
            redirect:true
        })
    }
    render(){
        return(
            
  <div className="container">
  <div className="row">
    <div className="col-md-12 center page-title-box">
    <p className="h1 text-center mb-4" style={{paddingBottom:'10px'}}>Wataru Doita's Profile</p>
    </div>
  </div>
  <div className="row margin-bottom-100">
    <div className="col-md-offset-2 col-md-3"> 
      <img src="http://gsl.mit.edu/media/cache/ba/4a/ba4aaeafe2af68a2071a864263e27a57.jpg" width="100" height="100" className="img-rounded" />
	<h3>Affiliation</h3>
	<p><a href="/partner/2/">Massachusetts Institute of Technology</a></p>	
	<h3>Nickname</h3>
	<p>Wataru</p>
	<h3>Resume</h3>
	<p><a href="http://gsl.mit.edu/media/user/resumes/1757/Resume%20Wataru_Doita_original.pdf">PDF</a></p>
    </div>
    <div className="col-md-4">
      <h3>Home</h3>
      <p>
      Cambridge,
       United States</p>
      <h3>Homepage</h3>
      <p><a href="https://www.facebook.com/wataru.doita">https://www.facebook.com/wataru.doita</a></p>
      <h3>Bio</h3>
      <p>Wataru is an MBA student at MIT Sloan School of Management and holds a bachelor’s degree in law. Before coming to MIT, he worked as an international business development manager in a Japanese conglomerate and made a lot of business trips around the world such as Russia, Cambodia, and Portugal. In MIT, Wataru enjoys learning entrepreneurship and data analysis, aiming at founding his own company while he is in the school. He had been a weekend coach for a college football club in Japan for three and half years and interested in education. Wataru loves watching/playing sports (especially football), biking, and traveling. </p>
      <h3>Skills</h3>
        <ul>
            <li>Communication</li>
            <li>Entrepreneurship</li>
            </ul>
       <h3>Experience</h3>
       <ul>
            <li>She worked as Entrepreneurship Lead Instructor in GSL Rwanda Summer 2018 for several months</li>
            <li>She became President, Las Manos Unidas (spanish-speaking community service club</li>
            <li>She became Captain, Mock Trial Team</li>
            </ul>
            
    </div>
    <div className="col-md-3">  
      <h3>Entrepreneurship Lead Instructor</h3>
      <button type="button" className="btn btn-raised btn-primary" onClick={this.changeCardView.bind(this)}>Hire</button>
  {this.state.viewcard?    <PaymentForm />:""}


{ this.state.redirect ? <Redirect  to={ {pathname: "/recruit"}}/>: ""}

	

    </div>  
  </div>
  </div>
        )
    }
}