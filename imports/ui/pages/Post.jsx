import React from 'react';
import { Meteor } from 'meteor/meteor';
import {Userdata} from '../../api/tasks.js';
import ReactDOM from 'react-dom';
import UserInfo from '../userinfo.js';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


 export default class Post extends TrackerReact(React.Component){
//constructor to publish data
constructor(){
  super();
  this.state={subscription:{
    postings: Meteor.subscribe("userdata"),
    comment:Meteor.subscribe('comment'),
    },
  loginDrop:true,
  displayed:'all',
  postTitle:'RECENT POSTS'
}
}
alreadyHaveAccount(e){
  e.preventDefault();
this.setState({
      loginDrop:!this.state.loginDrop
  })
  Session.set('Meteor.loginButtons.dropdownVisible',this.state.loginDrop);
}
componentWillUnmount(){
  this.state.subscription.postings.stop();
  this.state.subscription.comment.stop();

}
 //adding a Job post
  addJobPost(e){
    e.preventDefault();
    var post=ReactDOM.findDOMNode(this.refs.post).value;
    var title=ReactDOM.findDOMNode(this.refs.title).value;
    var cat=ReactDOM.findDOMNode(this.refs.cat).value;
    var exp=ReactDOM.findDOMNode(this.refs.exp).value;
    var vac=ReactDOM.findDOMNode(this.refs.vac).value;
    
   if (post){
  Meteor.call('addJobPost',post,title,cat,exp,vac,()=>{
    ReactDOM.findDOMNode(this.refs.post).value="";
  });
   }
   else{
     alert("Please input something");
   }
  }
fullChange(e){
  e.preventDefault();
  this.setState({
    displayed:'full',
    postTitle:'FULL TIME JOBS'
  })
}
partChange(e){
  e.preventDefault();
  this.setState({
   displayed:'part',
   postTitle: 'PART TIME JOBS'
  })
}
myChange(e){
  e.preventDefault();
  this.setState({
    displayed:'my',
    postTitle:'MY JOB POSTS'
  })
}
//fetching posts from collection
  postings() {
    switch(this.state.displayed){
      case 'all':
      return Userdata.find().fetch();
      case'my':
      return Userdata.find({id:Meteor.userId()}).fetch();
      case'full':
      return Userdata.find({cat:'Full Time'}).fetch();
      case 'part':
      return Userdata.find({cat:'Part Time'}).fetch();
    }
    }
  

  render(){ 

   return(
    <div className="container-fluid">

    <div className="row content">

      <div className="col-sm-3 sidenav">
        <h4>Job Posting</h4>
        <ul className="nav nav-pills nav-stacked">
          <li className="active"><a href="/dashboard">Portfolio</a></li>
          {Meteor.userId()?
          <li><a onClick={this.myChange.bind(this)}>My Job Posts</a></li>:""}
          <li><a onClick={this.fullChange.bind(this)}>Full Time Jobs</a></li>
          <li><a onClick={this.partChange.bind(this)}>Part Time Jobs</a></li>
        </ul>
  
        <br></br>  
      </div>
     
      <div className="col-sm-9">
      <div className="col-sm-8">
      <div style={{paddingTop:'20px'}}><p className="jumbotron"><small><b>This page is where you describe the employee you want. Please make sure you do it correctly,we have used select option to make it easy for you.Once you finish the selection go on and describe in details in the text area.This will help people to understand whom you want once you job is posted.Once you are done you wait for the system to do the matching for you.Note that our matching sytem try to find the best matches and we try to make it more accurate.</b></small> </p></div>
      {Meteor.userId() ? 
    <div className="jumbotron">
      <form >
    <div className="md-form">
    <label for="form1" >Job Title</label>
    <input type="text"  className="form-control" ref="title" />
    </div>
    <label for="sel1">Choose post:</label>
      <select className="form-control" ref="vac">
        <option>Programmer</option>
        <option>IT Technicians</option>
        <option>Electricians</option>
        <option>Sound Technicians</option>
      </select>
      <label for="sel1">Choose Experience:</label>
      <select className="form-control" ref="exp">
        <option>5 years</option>
        <option>4 years</option>
        <option>3 years</option>
        <option>2 years</option>
      </select>
      <label for="sel1">Choose categories:</label>
      <select className="form-control" ref="cat">
        <option>Full Time</option>
        <option>Part Time</option>
       
      </select>
        <div className="form-group">
        <label for="exampleFormControlTextarea1">Add a Post </label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" ref="post"></textarea>
       </div>
       <div className="form-group row">
        <div className="col-sm-10">
            <button type="submit" className="btn btn-primary btn-md" onClick={this.addJobPost.bind(this)}>Post</button>
        </div>
        </div>
      </form></div>:<p className="jumbotron">Want to post your own job please <a className="label label-primary" onClick={this.alreadyHaveAccount.bind(this)} style={{float:'right'}}>login</a></p>}
      <h4><small>{this.state.postTitle}</small></h4>
       <hr></hr>
        <div>{this.postings().map((posts)=>{ if(posts.id==Meteor.userId()) return <UserInfo publisher={posts.user} key= {posts._id} status={posts.publish} id={posts._id} userId={posts.id} posts={posts.post} createdAt={posts.createdAt.toString()} title={posts.title} cat={posts.cat} publish={posts.published} exp={posts.exp} vac={posts.vac}/> 
      else if(posts.published==true)
      return <UserInfo publisher={posts.user} key= {posts._id} status={posts.publish} id={posts._id} userId={posts.id} posts={posts.post} createdAt={posts.createdAt.toString()} title={posts.title} cat={posts.cat} publish={posts.published} exp={posts.exp} vac={posts.vac}/>})
      }</div>
        <br></br>
        
        <p><span className="badge">2</span> Comments:</p> <br></br>
        
        <div className="row">
         
          <div className="col-sm-10">
            <h4>John Row <small>Sep 25, 2015, 8:25 PM</small></h4>
            <p>I am so happy for you man! Finally. I am looking forward to read about your trendy life. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <br></br>
            <p><span className="badge">1</span> Comment:</p><br></br>
            <div className="row">
              <div className="col-sm-2 text-center">
                <img src="http://bdfjade.com/data/out/115/6192080-picture-of-a-bird.jpg" className="img-circle" height="65" width="65" alt="Avatar" />
              </div>
              <div className="col-xs-10">
                <h4>Nested Bro <small>Sep 25, 2015, 8:28 PM</small></h4>
                <p>Me too! WOW!</p>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

  </div>
 );
  }
}
