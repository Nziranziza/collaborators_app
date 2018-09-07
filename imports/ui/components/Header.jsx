import React from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.js';
import { Meteor } from 'meteor/meteor';
import TrackerReact from 'meteor/ultimatejs:tracker-react';



export default class Header extends TrackerReact(React.Component) {
  constructor(){
    super();
    this.state={
      lang:true,
    }
  }

  changeLang(e){
    e.preventDefault();
    this.setState({
      lang:!this.state.lang
    })
    console.log(this.state.lang)
  }
  render() {
    return (
      <header className='Header'>
       <nav className="navbar navbar-inverse" style={{marginBottom:'0px'}} >
      <div className="container-fluid">
      <div className="navbar-header" >
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">Collaborators</a>
        </div>
    <div className="collapse navbar-collapse" id="navbar-collapse-1">
    <ul className="nav navbar-nav " >
      <li><a href="/">{this.state.lang ?'Home':'Ahabanza'}</a></li>
      <li><a href="/recruit">{this.state.lang?'Recruit':'Tanga akazi'}</a></li>
      <li><a href="/post">{this.state.lang ?'Post':'Tangaza'}</a></li>
      { Meteor.userId() ? <li><a href="/dashboard">{this.state.lang? 'Dashboard':'Konte'}</a></li>:""}
      <li><a href="/about">{this.state.lang ?'About Us':'Abo tuti bo'}</a></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a><AccountsUIWrapper /></a></li>
      <li><a href="/help">{this.state.lang ? 'Help':'Ubufasha'}</a></li>
      <li><a onClick={this.changeLang.bind(this)} className="label blue-gradient btn-rounded" style={{backgroundColor:'#3f51b5'}}>Eng/Kiny</a></li>
    </ul>
    </div>
  </div>
</nav>
      </header>
    );
  }
}
