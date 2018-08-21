import React from 'react';
import DashboardNav from './dashboard/DashboardNav.jsx';
import SignupLogin from './SignupLogin.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {Biography} from '../../api/tasks.js';

class DisplayBiography extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.text}</p>
            </div>

        );
    }
}

export default class Dashboard extends TrackerReact(React.Component) {
   constructor(){
       super();
       this.state={
           bio:false,
           subscription:{
            Biography: Meteor.subscribe("biography")
          }
       }
   }
   componentWillUnmount(){
    this.state.subscription.biography.stop();
  }
  Biography(){
    return Biography.find().fetch();
}
   addBiography(){
       this.setState({
           bio:true,
       })
   }
   saveBiography(e){
       e.preventDefault();
       var text=this.refs.bio.value;
       Meteor.call('addBiography',text);
       alert("The data saved successful");
       this.setState({
           bio:false
       })
   }
   checkBio(){
       var biography= Biography.find().fetch().map((Info)=> {return Info});
       return(biography ? true:false)
        
   }
    render(){
    return (
        Meteor.userId() ?
        <div>
            <DashboardNav />
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Dashboard</h1>
                    </div>


                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <i className="fa fa-comments fa-5x"></i>
                                        </div>
                                        <div className="col-xs-9 text-right">
                                            <div className="huge">26</div>
                                            <div>Rankings</div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <div className="panel-footer">
                                        <span className="pull-left">View Details</span>
                                        <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                        <div className="clearfix"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-green">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <i className="fa fa-tasks fa-5x"></i>
                                        </div>
                                        <div className="col-xs-9 text-right">
                                            <div className="huge">Available</div>
                                            <div>Status</div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <div className="panel-footer">
                                        <span className="pull-left">View Details</span>
                                        <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                        <div className="clearfix"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-yellow">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <i className="fa fa-shopping-cart fa-5x"></i>
                                        </div>
                                        <div className="col-xs-9 text-right">
                                            <div className="huge">124</div>
                                            <div>Lessons</div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <div className="panel-footer">
                                        <span className="pull-left">View Details</span>
                                        <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                        <div className="clearfix"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-red">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <i className="fa fa-support fa-5x"></i>
                                        </div>
                                        <div className="col-xs-9 text-right">
                                            <div className="huge">13</div>
                                            <div>Trainings</div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <div className="panel-footer">
                                        <span className="pull-left">View Details</span>
                                        <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                        <div className="clearfix"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
    {/*Area chat starts from here*/}                    
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <i className="fa fa-bar-chart-o fa-fw"></i> Biography
                            <div className="pull-right">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                                Actions
                                        <span className="caret"></span>
                                            </button>
                                            <ul className="dropdown-menu pull-right" role="menu">
                                                <li><a href="#">Action</a>
                                                </li>
                                                <li><a href="#">Another action</a>
                                                </li>
                                                <li><a href="#">Something else here</a>
                                                </li>
                                                <li className="divider"></li>
                                                <li><a href="#">Separated link</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <p><small>This section helps the recruiters to know more about you please describe yourself as the best as you can. Completing this section will increase your ratings and hence affecting your chances to get a job.</small></p>
                                    <div id="morris-area-chart">
                                    <button type="button" className="btn btn-raised btn-primary" onClick={this.addBiography.bind(this)}>{this.checkBio()?'Edit':'Add Bio'}</button>
                                    {this.state.bio ? <div> <div class="form-group">
                                                               <label for="exampleTextarea" className="bmd-label-floating">Write your biography here</label>
                                                               <textarea className="form-control" ref='bio' rows="5"></textarea>
                                                            </div>
                                                            <button type="button" className="btn btn-raised btn-primary" onClick={this.saveBiography.bind(this)}>Save</button>
                                                      </div>:
                                                      <div>{this.Biography().map((info)=>{return <DisplayBiography text={info.biotext} key={info._id}/>})}</div>}
                                    </div>
                                </div>

                            </div>
 {/*Area chat ends  here*/}  
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <i className="fa fa-bar-chart-o fa-fw"></i> Bar Chart Example
                            <div className="pull-right">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                                Actions
                                        <span className="caret"></span>
                                            </button>
                                            <ul className="dropdown-menu pull-right" role="menu">
                                                <li><a href="#">Action</a>
                                                </li>
                                                <li><a href="#">Another action</a>
                                                </li>
                                                <li><a href="#">Something else here</a>
                                                </li>
                                                <li className="divider"></li>
                                                <li><a href="#">Separated link</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="table-responsive">
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div id="morris-bar-chart"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

{/*Responsive timeline start from here*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <i className="fa fa-clock-o fa-fw"></i> Responsive Timeline</div>

                        <div className="panel-body">
                            <ul className="timeline">
                            </ul>
                        </div>
                    </div>
{/*Responsive timeline end here from here*/}
{/*Notification Pane was here*/}

                </div>
            </div>
        </div>:<div className="container" style={{paddingLeft:'30%',paddingBottom:'100px',paddingTop:'50px'}}><SignupLogin /></div>
    );
}
}
