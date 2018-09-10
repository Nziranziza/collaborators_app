import React, { Component } from 'react';
import {Comment} from '../api/tasks.js';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class UserInfo extends TrackerReact(Component) {

  constructor(){
    super();
    this.state={subscription:{
      comment:Meteor.subscribe('comment')
    }
  }
}

addComment(e){
  e.preventDefault();
  var comment=ReactDOM.findDOMNode(this.refs.comment).value;
  Meteor.userId() ?
 Meteor.call('addComment',comment,this.props.id,()=>{
  ReactDOM.findDOMNode(this.refs.comment).value="" 
}): alert("Please login first");

}  

  //deleting a Job post
deleteJobPost(e){
  e.preventDefault();
 Meteor.call('deleteJobPost',this.props.id,()=>{ Comment.find({postId: this.props.id}).fetch().map((posts)=> Meteor.call('deleteComment',posts._id)) ;});
  }

//publishing a job post
publishJobPost(e){
  e.preventDefault();
  Meteor.call('publishJobPost',this.props.id,this.props.posts,this.props.title,this.props.cat,this.props.exp,this.props.vac,this.props.publish)
}

componentWillUnmount(){
  this.state.subscription.comment.stop();
}

comment(){
  return Comment.find({postId: this.props.id}).fetch();
}
  render(){
    return (
      <div className="jumbotron">
      <h2>{this.props.title}</h2>
      <h5><span className="glyphicon glyphicon-time"></span> Post by {this.props.publisher}, {this.props.createdAt}</h5>
      <h5><span className="label label-danger">Job</span> <span className="label label-primary">{this.props.cat}</span></h5><br></br>
      <div>{this.props.posts}</div>
      {Meteor.userId() === this.props.userId ?
      <div style={{marginTop:'10px'}}>
      <button type="button" className="label label-success" onClick={this.publishJobPost.bind(this)}>{this.props.publish ? "Unpublish":"Publish"}</button>
      <button type="button" className="label label-danger" onClick={this.deleteJobPost.bind(this)} style={{marginLeft:'5px'}}>Delete</button>
      </div>:""}
    <br/>
      <p><span className="badge">{this.comment().length}</span> Comments:</p> <br></br>
      <div className="row">
      {this.comment().map((posts)=>{ return <DisplayComment key={posts._id} id={posts._id} comment={posts.comment} postId={posts.postId} user={posts.user} date={posts.createdAt.toString()}/>})}
      </div>
      <br></br>
      <h4>Leave a Comment:</h4>
        <form role="form" onSubmit={this.addComment.bind(this)}>
          <div className="form-group">
            <textarea className="form-control" rows="3" required ref="comment"></textarea>
          </div>
          <button type="submit" className="label btn-success">Submit</button>
        </form>
    </div>
    );
  }
}

class DisplayComment extends React.Component{
  deleteComment(e){
    e.preventDefault();
    Meteor.call('deleteComment',this.props.id)
  }
  render(){
    return(
      <div>
      <div className="col-sm-2 text-center">
           <img src="jennah.jpg" className="img-circle" height="65" width="65" alt="Avatar" />
         </div>
         <div className="col-sm-10">
           <h4>{this.props.user} <small>{this.props.date}</small></h4>
           <small>{this.props.comment}</small>
           {Meteor.userId()?
            Meteor.user().username==this.props.user ?
           <button type="button" className="label label-danger" onClick={this.deleteComment.bind(this)} style={{float:'right'}}>Delete</button>:"" :""}
           <hr/>
         </div>
     </div>
    )
  }
}