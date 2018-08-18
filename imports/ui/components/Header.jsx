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
      <a className="navbar-brand" href="/">Collaborators</a>
    </div>
    <ul className="nav navbar-nav ">
      <li><a href="/">Home</a></li>
      <li><a href="/recruit">Recruit</a></li>
      <li><a href="/post">Post</a></li>
      { Meteor.user() ? <li><a href="/dashboard">Dashboard</a></li>:""}
      <li><a href="/about">About Us</a></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a><AccountsUIWrapper /></a></li>
      <li><a href="/help">Help</a></li>
      <li><a href="#">Eng/Kiny</a></li>
    </ul>
  </div>
</nav>
      </header>
    );
  }
}
