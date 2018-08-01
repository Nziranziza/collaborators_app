import React from 'react';
import { Meteor } from 'meteor/meteor'; 
import { Redirect } from 'react-router-dom';
export default class SignupLogin extends React.Component{
    constructor(){
        super();
        this.state={
            noAccount:true,
            loginDrop:true,
            redirect:false
        }
    }
    //creating user accounts
  addUser(e){
    e.preventDefault();
    var email = this.refs.email.value.trim();
    var username = this.refs.name.value.trim();
    var confirmemail = this.refs.confirmemail.value.trim();
    var password = this.refs.password.value.trim();
//checking form validation   
    if(email===confirmemail){ //here email match
      if(email){
        Accounts.createUser({
          email: email,
          password: password,
          username: username
        });
      this.setState({
          redirect:true
      })
      }
      else{
        alert("Email and Confirm email must no be empty")
        return false;
      }  
    }

    else{
      if(password){
         return(
        alert("Email does not match")
      );
    }
    alert("Please input your password")
    }
    }
    //change state
    alreadyHaveAccount(e){
        e.preventDefault();
      this.setState({
            loginDrop:!this.state.loginDrop
        })
        Session.set('Meteor.loginButtons.dropdownVisible',this.state.loginDrop);
    }
    login(e){
        e.preventDefault();
        var email=this.refs.lemail.value.trim();
        var password=this.refs.lpassword.value.trim();
        Meteor.loginWithPassword(email,password);
    }
    render(){
        return(
            
<div>
  {this.state.noAccount ?
    <form id="homeform" onSubmit={this.addUser.bind(this)} >
    <p className="h4 text-center mb-4">Create an Account</p>
    <div className="md-form">
        <i className="fa fa-user prefix grey-text"></i>
        <input type="text" id="materialFormRegisterNameEx" className="form-control" ref="name" />
        <label for="materialFormRegisterNameEx">Username</label>
    </div>

    <div className="md-form">
        <i className="fa fa-envelope prefix grey-text"></i>
        <input type="email" id="materialFormRegisterEmailEx" className="form-control" ref="email" />
        <label for="materialFormRegisterEmailEx">Email</label>
    </div>


    <div className="md-form">
        <i className="fa fa-exclamation-triangle prefix grey-text"></i>
        <input type="email" id="materialFormRegisterConfirmEx" className="form-control" ref="confirmemail"/>
        <label for="materialFormRegisterConfirmEx">Confirm Email</label>
    </div>

  
    <div className="md-form">
        <i className="fa fa-lock prefix grey-text"></i>
        <input type="password" id="materialFormRegisterPasswordEx" className="form-control" ref="password"/>
        <label for="materialFormRegisterPasswordEx">Password</label>
    </div>

    <div className="text-center mt-4">
        <button className="btn btn-raised btn-info" type="submit" >Register</button>
       <p> Already have an Account? Please <a href="" onClick={this.alreadyHaveAccount.bind(this)}>Login</a></p> 
    </div>
  </form>
  :<form onSubmit={this.login.bind(this)}>
  <p className="h4 text-center mb-4">Login</p>
  <div className="md-form">
        <i className="fa fa-user prefix grey-text"></i>
        <input type="text" id="materialFormRegisterNameEx" className="form-control" ref="lemail" />
        <label for="materialFormRegisterNameEx">Username or Email</label>
    </div>
    <div className="md-form">
        <i className="fa fa-lock prefix grey-text"></i>
        <input type="password" id="materialFormRegisterPasswordEx" className="form-control" ref="lpassword"/>
        <label for="materialFormRegisterPasswordEx">Password</label>
    </div>
    <div className="text-center mt-4">
        <button className="btn blue-gradient btn-rounded" type="submit" >Register</button>
        <p> Don't have an Account? Please <a href="" onClick={this.alreadyHaveAccount.bind(this)}>Sign up</a></p> 
    </div>
  </form>}
  {this.state.redirect ? <Redirect  to={ {pathname: "/dashboard"}}/>: ""}
</div>
        )
    }
}