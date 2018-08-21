import React from 'react';
import DashboardNav from './DashboardNav.jsx';
import {Languages} from '../../../api/tasks.js';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
class Language extends React.Component{
    render(){
        return(
           
                  <tr className="table-info">
                                          <th scope="row"></th>
                                          <td>{this.props.lang}</td>
                                          <td>{this.props.level}</td>
                  </tr>  
           
        )
    }
}
export default class  LanguageDetails extends TrackerReact(React.Component){
    constructor(){
        super();
        this.state={
            addlang:false,
            subscription:{
                Languages: Meteor.subscribe("languages")
            }
        }
    }

    componentWillUnmount(){
        this.state.subscription.Languages.stop();
      }

    addLanguage(e){
        e.preventDefault();
        this.setState({
            addlang:true
        })   
    }
    saveLanguage(e){
        e.preventDefault();
        var lang=this.refs.lang.value.trim();
        var level=this.refs.level.value.trim();
        Meteor.call('addLanguage',lang,level);
        alert("The language added successful");
        this.setState({
            addlang:false
        });
    }
    cancel(e){
        e.preventDefault();
        this.setState({
           addlang:false 
        })
    }

    languages(){
        return Languages.find().fetch();
    }
    render(){
    return(<div>
        <DashboardNav />
        <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Language Details</h1>
                        <p>Please information about the languages you can speak,listen or write.Completing this section helps recruiters to know if you will be able to work with different kinds of people</p>
                        <div className="panel panel-default">
                                <div className="panel-heading">
                                    <i className="fa fa-bar-chart-o fa-fw"></i>Language Details
                            <div className="pull-right">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                                Actions
                                        <span className="caret"></span>
                                            </button>
                                            <ul className="dropdown-menu pull-right" role="menu">
                                                <li><a href="#">Add</a>
                                                </li>
                                                <li><a href="#">Edit</a>
                                                </li>
                                                <li><a href="#">Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel-body">
                                
                                {this.state.addlang? <button type="button" className="btn btn-raised btn-primary" onClick={this.cancel.bind(this)}>cancel</button>:<button type="button" className="btn btn-raised btn-primary" onClick={this.addLanguage.bind(this)}>Add </button>}
                                {this.state.addlang ? <form className="form-inline" onSubmit={this.saveLanguage.bind(this)}>
                                    <div className="form-group" style={{paddingRight:'10px'}}>
                                    <input type="name" className="form-control" ref="lang" placeholder="Language"  />
                                    </div>
                                   <div className="form-group" style={{paddingRight:'10px'}}>
                                   <input type="name" className="form-control" ref="level" placeholder="Level"/>
                                   </div>
                                   <button type="submit" className="btn btn-raised btn-primary" >Save</button>
                                   </form>  :''
                                }
                                
                                <table className="table table-striped w-auto">
                                  <thead>
                                      <tr>
                                          <th></th>
                                          <th>Languages</th>
                                          <th>Grade/Level</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                  {this.languages().map((info)=>{ return <Language lang={info.lang} level={info.level} key={info._id}/>})}
                                  </tbody>
                                </table>
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
        </div>
        </div>
    )
}
}

