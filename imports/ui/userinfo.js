import React, { Component } from 'react';
 

export default class UserInfo extends Component {

  //deleting a Job post
deleteJobPost(){
 Meteor.call('deleteJobPost',this.props.id);
  }

//publishing a job post
publishJobPost(){
  console.log(this);
}
  render() {
    return (
      <div className="jumbotron">
      <h2>{this.props.title}</h2>
      <h5><span className="glyphicon glyphicon-time"></span> Post by {this.props.publisher}, {this.props.createdAt}</h5>
      <h5><span className="label label-danger">Job</span> <span className="label label-primary">Full Time</span></h5><br></br>
      <div>{this.props.posts}</div>
      <button type="button" className="btn btn-success" onClick={this.publishJobPost.bind(this)}>Publish</button>
      <button type="button" className="btn btn-danger" onClick={this.deleteJobPost.bind(this)} >Delete</button>
      <br></br>
    </div>
    );
  }
}