import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Meteor } from 'meteor/meteor';
import {Person} from '../../api/tasks.js';

function PersonImage(props){
  return(
         
         <div className="col-md-3 col-sm-6 col-xs-12" className="card" >
                            <div className="service-item text-center" >
                                <i className="fa fa-pencil"><img src={props.url} width="150" height="150"/></i>
                                <h5><b>{props.name}</b></h5>
                                <div className="separator2"></div>
                                <h5>{props.name} is an architect and an engineer</h5>
                                <a href={props.link} className="btn btn-primary">See Profile</a>
                            </div>
          </div> 
  );
}

export default class Recruit extends TrackerReact(React.Component){
  constructor(){
    super();
    this.state={
      show:false,
      showe:false,
      subscription:{
        person:Meteor.subscribe('person')
      }
    }
  }
  changeShow(e){
    e.preventDefault();
    this.setState({
      show:!this.state.show
    })
  }
  changeShowe(e){
    e.preventDefault();
    this.setState({
      showe:!this.state.showe
    })
  }
  componentWillUnmount(){
    this.state.subscription.person.stop();
  }
  render(){
    return (
      <div className='container'>
        <p className="h1 text-center mb-4" style={{paddingBottom:'10px'}}>Strong Team Successful Business</p>
        <p className="h4 text-center mb-4" className="jumbotron">We have a lot of workers you can recruit for your organisation and for part time job. 
          Browse through them or let do them matching to save your time</p>
          <section className="jumbotron">
      <div className="row">
      <div className="wrapper">
      
        <PersonImage name="Jennah Haque" url="http://gsl.mit.edu/media/cache/90/37/90374362e74050b208565056391c9d80.jpg" link="/recruit/profile1"/>
        <PersonImage name="Schadrack" link="http://gsl.mit.edu/accounts/1797/" url="http://gsl.mit.edu/media/cache/01/e6/01e6341b617cc5e083aaa5d25c3b145c.jpg"/>
        <PersonImage name="Wataru Doita" link="/recruit/profile2" url="http://gsl.mit.edu/media/cache/74/65/746529893daccdd9989e58ec6aa06a1a.jpg" />
        <PersonImage name="Tosin Bosede" link="/recruit/profile4" url="http://gsl.mit.edu/media/cache/0a/c5/0ac516d1c080e04c54df44b4dbf2a0ec.jpg"/>   
       
    
    <PersonImage name="Jim Musika Ntare" link="http://gsl.mit.edu/accounts/1800/" url="http://gsl.mit.edu/media/cache/bf/df/bfdf935af023fa8981dd86ef67dccbb6.jpg" />
        
    <PersonImage name="Germaine" url="http://gsl.mit.edu/media/cache/0e/32/0e322a9132cf411154cb1b3f2cf86bc6.jpg" link="http://gsl.mit.edu/accounts/1898/"/>
         
    <PersonImage name="Josiane Jojo" url="http://gsl.mit.edu/media/cache/ad/60/ad601ef4c339e00331256cf1e184020f.jpg" link="http://gsl.mit.edu/accounts/1804/"/>
         
    {Person.find().fetch().map((info)=>{return <PersonImage name={info.name} url="http://gsl.mit.edu/media/cache/ad/60/ad601ef4c339e00331256cf1e184020f.jpg"/> })}
    
   
    < PersonImage url={"http://gsl.mit.edu/media/cache/de/ac/deacf6c048530f2b57015729ff61ed04.jpg"} name={"Kosi Aroh"}
    link={"http://gsl.mit.edu/accounts/1755/"} />
  
    </div>
   </div>
   </section>
    <p className="h3 text-center mb-4" style={{paddingBottom:'10px'}}>Select Workers by Categories</p>
    <button type="button" className="btn btn-raised btn-primary" onClick={this.changeShow.bind(this)}>Programmers</button>
    {this.state.show ?<div>
      <div className="card">
         <img className="card-img-top" src="http://gsl.mit.edu/media/cache/55/ea/55ea6d4cc6c5e88dceb806ccd8e5776a.jpg" alt="Card image"  />
         <div className="card-body">
         <h4 className="card-title">Clet Mwunguzi</h4>
         <p className="card-text">Clet Mwunguzi is an architect and engineer</p>
         <a href="/recruit/profile" className="btn btn-primary">See Profile</a>
      </div>
    </div>

     <div className="card">
         <img className="card-img-top" src="http://gsl.mit.edu/media/cache/20/b4/20b48bf736c239bafa82178f857e3436.jpg" alt="Card image"  />
         <div className="card-body">
         <h4 className="card-title">Lucky John</h4>
         <p className="card-text">Lucky John is an architect and engineer</p>
         <a href="/recruit/profile" className="btn btn-primary">See Profile</a>
      </div>
    </div>

    <div className="card">
         <img className="card-img-top" src="http://gsl.mit.edu/media/cache/77/8c/778c48d630b3c6b50e204251d42adc49.jpg" alt="Card image"  />
         <div className="card-body">
         <h4 className="card-title">Honore</h4>
         <p className="card-text">Honore is an architect and engineer</p>
         <a href="/recruit/profile" className="btn btn-primary">See Profile</a>
      </div>
    </div>

    <div className="card">
         <img className="card-img-top" src="http://gsl.mit.edu/media/cache/6e/a8/6ea8af3b1568b13bd79aaf235bab9a9e.jpg" alt="Card image"  />
         <div className="card-body">
         <h4 className="card-title">Shyaka Cedric</h4>
         <p className="card-text">Shyaka Cedric is an architect and engineer</p>
         <a href="/recruit/profile" className="btn btn-primary">See Profile</a>
      </div>
    </div>
    </div>:""}
    <button type="button" className="btn btn-raised btn-info">Electrians</button>
    <button type="button" className="btn btn-raised btn-info">Electrocians</button>
    <button type="button" className="btn btn-raised btn-info">Masonry</button>
    <button type="button" className="btn btn-raised btn-info">Painters</button>
    <button type="button" className="btn btn-raised btn-info">IT Technicians</button>
    <button type="button" className="btn btn-raised btn-info">Engineering Technicians</button>
    <button type="button" className="btn btn-raised btn-info">Architectural Technicians</button>
    <button type="button" className="btn btn-raised btn-info">Telecommunications Technicians</button>
    <button type="button" className="btn btn-raised btn-info">Sound Technicians</button>
    <button type="button" className="btn btn-raised btn-info">Computer Technicians</button>
    <br/>
    <p className="h3 text-center mb-4" style={{paddingBottom:'10px'}}>Select Workers by Experiences</p>
    <button type="button" className="btn btn-raised btn-info" onClick={this.changeShowe.bind(this)}>5 Years Experience</button>
    {this.state.showe? <div>
      <div className="card">
         <img className="card-img-top" src="http://gsl.mit.edu/media/cache/43/2f/432f5d1b26bdbf11ad85d062b4d5f787.jpg" alt="Card image"  />
         <div className="card-body">
         <h4 className="card-title">Safari Regis</h4>
         <p className="card-text">Safari Regis is an architect and engineer</p>
         <a href="/recruit/profile" className="btn btn-primary">See Profile</a>
      </div>
    </div>

    <div className="card">
         <img className="card-img-top" src="http://gsl.mit.edu/media/cache/15/d8/15d81b0b28a01d578cffa83205c3a120.jpg" alt="Card image"  />
         <div className="card-body">
         <h4 className="card-title">Patrick</h4>
         <p className="card-text">Patrick is an architect and engineer</p>
         <a href="/recruit/profile" className="btn btn-primary">See Profile</a>
      </div>
    </div>

    <div className="card">
         <img className="card-img-top" src="http://gsl.mit.edu/media/cache/64/4c/644ce33e65ed61a9f79c851cf446ae2d.jpg" alt="Card image"  />
         <div className="card-body">
         <h4 className="card-title">Jean salvi</h4>
         <p className="card-text">Jean salvi is an architect and engineer</p>
         <a href="/recruit/profile" className="btn btn-primary">See Profile</a>
      </div>
    </div>
    <div className="card">
         <img className="card-img-top" src="http://gsl.mit.edu/media/cache/87/2d/872d6b232ea7cea431f60677404f14bb.jpg" alt="Card image"  />
         <div className="card-body">
         <h4 className="card-title">Gilbert</h4>
         <p className="card-text">Gilbert is an architect and engineer</p>
         <a href="/recruit/profile" className="btn btn-primary">See Profile</a>
      </div>
    </div>

    
    </div>:""}
    <button type="button" className="btn btn-raised btn-info">4 Years Experience</button>
    <button type="button" className="btn btn-raised btn-info">3 Years Experience</button>
    <button type="button" className="btn btn-raised btn-info">2 Years Experience</button>
    <button type="button" className="btn btn-raised btn-info">1 Year Experience</button>
    <button type="button" className="btn btn-raised btn-info">Less than 1 Year Experience</button>

    </div>
 
    );

  }

}
