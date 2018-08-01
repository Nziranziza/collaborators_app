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
    postings: Meteor.subscribe("userdata")
  }

  }
}
componentWillUnmount(){
  this.state.subscription.postings.stop();
}
 //adding a Job post
  addJobPost(e){
    e.preventDefault();
    var post=ReactDOM.findDOMNode(this.refs.post).value;
    var title=ReactDOM.findDOMNode(this.refs.title).value;
    this.setState({
    post: post,
    })
   if (post){
  Meteor.call('addJobPost',post,title,()=>{
    ReactDOM.findDOMNode(this.refs.post).value="";
  });
   }
   else{
     alert("Please input something");
   }
  }



//fetching posts from collection
  postings() {
    return Userdata.find().fetch();
  }


  render(){ 

   return(
    <div className="container-fluid">

    <div className="row content">

      <div className="col-sm-3 sidenav">
        <h4>Job Posting</h4>
        <ul className="nav nav-pills nav-stacked">
          <li className="active"><a href="/dashboard">Portfolio</a></li>
          <li><a href="">My Job Posts</a></li>
          <li><a href="">Full Time Jobs</a></li>
          <li><a href="">Part Time Jobs</a></li>
        </ul>
  
        <br></br>  
      </div>
      
      <div className="col-sm-9">
      <form >
     
    <div className="md-form">
    <input type="text" id="form1" className="form-control" ref="title" />
    <label for="form1" >Job Title</label>
    </div>
    <label for="sel1">Choose post:</label>
      <select className="form-control" id="sel1">
        <option>Programmer</option>
        <option>IT Technicians</option>
        <option>Electricians</option>
        <option>Sound Technicians</option>
      </select>
      <label for="sel1">Choose Experience:</label>
      <select className="form-control" id="sel1">
        <option>5 years</option>
        <option>4 years</option>
        <option>3 years</option>
        <option>2 years</option>
      </select>
      <label for="sel1">Choose categories:</label>
      <select className="form-control" id="sel1">
        <option>Full Time</option>
        <option>Part Time</option>
       
      </select>
        <div className="form-group">
        <label for="exampleFormControlTextarea1">Add a Post </label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" ref="post"></textarea>
       </div>
       <div className="form-group row">
        <div className="col-sm-10">
            <button type="submit" className="btn btn-primary btn-md" onClick={this.addJobPost.bind(this)}>Post</button>
        </div>
        </div>
      </form>
      <h4><small>RECENT POSTS</small></h4>
       <hr></hr>
        <div>{this.postings().map((posts)=>{ return <UserInfo publisher={posts.Jobdata.user
        
        } key= {posts._id} status={posts.Jobdata.publish} id={posts._id} posts={posts.Jobdata.post} createdAt={posts.Jobdata.createdAt.toString()} title={posts.Jobdata.title}/> })}</div>
        <h4>Leave a Comment:</h4>
        <form role="form">
          <div className="form-group">
            <textarea className="form-control" rows="3" required></textarea>
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
        <br></br>
        
        <p><span className="badge">2</span> Comments:</p> <br></br>
        
        <div className="row">
          <div className="col-sm-2 text-center">
            <img src="https://nationalpostcom.files.wordpress.com/2015/08/ylxyogex5i.jpg" className="img-circle" height="65" width="65" alt="Avatar" />
          </div>
          <div className="col-sm-10">
            <h4>Anja <small>Sep 29, 2015, 9:12 PM</small></h4>
            <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <br></br>
          </div>
          <div className="col-sm-2 text-center">
            <img src="bird.jpg" className="img-circle" height="65" width="65" alt="Avatar" />
          </div>
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
 );
  }
}
