import React from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.js';
import { Meteor } from 'meteor/meteor';
import TrackerReact from 'meteor/ultimatejs:tracker-react';



export default class Header extends TrackerReact(React.Component) {
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
      <li><a href="/">Home</a></li>
      <li><a href="/recruit">Recruit</a></li>
      <li><a href="/post">Post</a></li>
      { Meteor.userId() ? <li><a href="/dashboard">Dashboard</a></li>:""}
      <li><a href="/about">About Us</a></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a><AccountsUIWrapper /></a></li>
      <li><a href="/help">Help</a></li>
      <li><a href="#">Eng/Kiny</a></li>
    </ul>
    </div>
  </div>
</nav>
      </header>
    );
  }
}
