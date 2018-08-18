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
    <p className="h1 text-center mb-4" style={{paddingBottom:'10px'}}>Kosi Aroh's Profile</p>
    </div>
  </div>
  <div className="row margin-bottom-100">
    <div className="col-md-offset-2 col-md-3"> 
      <img src="http://gsl.mit.edu/media/cache/be/92/be9251135c236d0583e01e24d6c88bf1.jpg" width="100" height="100" className="img-rounded" />
	<h3>Affiliation</h3>
	<p><a href="/partner/2/">Massachusetts Institute of Technology</a></p>	
	<h3>Nickname</h3>
	<p>Kosi</p>
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
      <p>Kosi is a PhD student in Chemical Engineering at MIT. He holds bachelor degrees in chemical engineering and computer science from the University of Maryland College Park. Kosi has had 2 years of experience as a Ruby on Rails web application programmer for a DC startup. He is interested in how he can use his technical skills in addressing challenges in Nigeria through new enterprises. Outside of school his interests include playing sports (soccer, tennis, basketball), podcasting, and reading/listening to books on history and the economy. </p>
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
      <h3>Technical Lead Instructor</h3>
      <button type="button" className="btn btn-raised btn-primary" onClick={this.changeCardView.bind(this)}>Hire</button>
  {this.state.viewcard?    <PaymentForm />:""}


{ this.state.redirect ? <Redirect  to={ {pathname: "/recruit"}}/>: ""}

	

    </div>  
  </div>
  </div>
        )
    }
}