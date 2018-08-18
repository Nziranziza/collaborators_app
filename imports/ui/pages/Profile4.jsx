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
    <p className="h1 text-center mb-4" style={{paddingBottom:'10px'}}>Tosin Bosede's profile</p>
    </div>
  </div>
  <div className="row margin-bottom-100">
    <div className="col-md-offset-2 col-md-3"> 
      <img src="http://gsl.mit.edu/media/cache/84/ec/84ec52e60f82f805dc1583ad28b56c2c.jpg" width="100" height="100" className="img-rounded" />
	<h3>Affiliation</h3>
	<p><a href="/partner/2/">Massachusetts Institute of Technology</a></p>	
	<h3>Nickname</h3>
	<p>Tosin</p>
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
      <p>Tosin is an MBA student at MIT Sloan School of Management. Prior to MIT, she started her career in Silicon Valley at Twitter and LinkedIn, where she worked with sales, marketing, product, and engineering teams as an operations analyst. While at MIT, Tosin has explored inclusive innovation and sustainability as a means of economic empowerment. She completed her summer internship at Microsoft, where she worked on bringing a new product to market. She is a digital product and design maven who is dedicated to developing technology that improves physical life. Tosin holds a bachelor's degree in Economics and enjoys road trips, singing, and exploring new cities. </p>
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
  {this.state.viewcard?  < PaymentForm />  :""}


{ this.state.redirect ? <Redirect  to={ {pathname: "/recruit"}}/>: ""}

	

    </div>  
  </div>
  </div>
        )
    }
}