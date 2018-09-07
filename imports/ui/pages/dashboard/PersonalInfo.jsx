import React from 'react';
import DashboardNav from './DashboardNav.jsx';
import { Meteor } from 'meteor/meteor';
import {Personalinfo} from '../../../api/tasks.js';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

class DisplayPersonInfo extends TrackerReact(React.Component){
    
    enableEditPersonalInfo(e){
        e.preventDefault();
        Meteor.call('enableEdit',Meteor._id);
    }
    render(){
        return(
            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <i className="fa fa-bar-chart-o fa-fw"></i> Personal Information
                            <div className="pull-right">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                                Actions
                                        <span className="caret"></span>
                                            </button>
                                            <ul className="dropdown-menu pull-right" role="menu">
                                                <li><a onClick={this.enableEditPersonalInfo.bind(this)}>Edit</a>
                                                </li>
                                                <li><a>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-body">
                              
<table className="table table-striped w-auto">
    <thead>
        <tr>
            <th></th>
            <th></th>   
        </tr>
    </thead>
    <tbody>
        <tr className="table-info">
            <th scope="row">First Name</th>
            <td>{this.props.fname}</td>
         </tr>   
        <tr>
            <th scope="row">Middle Name</th>
            <td>{this.props.mname}</td>
        </tr>
        <tr class="table-info">
            <th scope="row">Last Name</th>
            <td>{this.props.lname}</td>   
        </tr>
        <tr>
            <th scope="row">Gender</th>
            <td>{this.props.gender}</td>
            
        </tr>
        <tr className="table-info">
            <th scope="row">Marital Status</th>
            <td>{this.props.status}</td>
        </tr>
        <tr>
            <th scope="row">Date of Birth</th>
            <td>{this.props.bd}</td> 
        </tr>
        <tr className="table-info">
            <th scope="row">Nationality</th>
            <td>{this.props.nation}</td>  
        </tr>
        <tr>
            <th scope="row">Country of Birth</th>
            <td>{this.props.countryb}</td>
        </tr>
        <tr className="table-info">
            <th scope="row">Id number</th>
            <td>{this.props.id}</td>
        </tr>
    </tbody>
</table>

                                    <div id="morris-area-chart"></div>
                                </div>

                            </div>
        )
    }
}

export default class PersonalInfo extends TrackerReact(React.Component){
    constructor(){
        super();
        this.state={subscription:{
          personalInfo: Meteor.subscribe("personalInfo")
        },
        edit:false
        }
      }
      componentWillUnmount(){
        this.state.subscription.personalInfo.stop();
      }
      personalInfo(){
        return Personalinfo.find().fetch();
    }
    enableEditPersonalInfo(e){
        e.preventDefault();
        this.setState({
            edit:!this.state.edit
        })
        console.log(this)
    }

    render(){
        const buttonName= this.state.edit? "Disable Edit":"Enable Edit";
        return(<div>
             <DashboardNav />
              <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Personal Information<button className="btn blue-gradient btn-rounded" type="button" onClick={this.enableEditPersonalInfo.bind(this)} style={{float:'right'}}>{buttonName}</button></h1>
                    </div>
              
                  </div>
           { this.state.edit ?
            <HandlePersonalInfo />:
            <div>{this.personalInfo().map((info)=> {return <DisplayPersonInfo fname={info.fname} mname={info.mname} lname={info.lname} gender={info.gender} status={info.status} bd={info.bd} nation={info.nation} countryb={info.countryb} id={info.id} click={this.enableEditPersonalInfo}/>})}</div>
           }
            </div></div>
        );
    }
}
 class  HandlePersonalInfo extends TrackerReact(React.Component){
    
    constructor(){
        super();
        this.state={subscription:{
          personalInfo: Meteor.subscribe("personalInfo")
        }
        }
      }
      componentWillUnmount(){
        this.state.subscription.personalInfo.stop();
      }

    addPersonalInfo(e){
        e.preventDefault();
        var fname=this.refs.fname.value.trim();
        var mname=this.refs.mname.value.trim();
        var lname=this.refs.lname.value.trim();
        var gender=this.refs.gender.value;
        var status=this.refs.status.value;
        var bd=this.refs.bd.value;
        var nation=this.refs.nation.value;
        var countryb=this.refs.nation.value;
        var id=this.refs.id.value;
        Meteor.call('addPersonalInfo',fname,mname,lname,gender,status,bd,nation,countryb,id);
        alert("Data saved successful");
    }
   enableEditPersonalInfo(e){
        e.preventDefault();
        var person= Personalinfo.find().fetch().map((Info)=> {return Info});
        ReactDOM.findDOMNode(this.refs.fname).value=person[0].fname;
        ReactDOM.findDOMNode(this.refs.mname).value=person[0].mname;
        ReactDOM.findDOMNode(this.refs.lname).value=person[0].lname;
        ReactDOM.findDOMNode(this.refs.gender).value=person[0].gender;
        ReactDOM.findDOMNode(this.refs.status).value=person[0].status;
        ReactDOM.findDOMNode(this.refs.bd).value=person[0].bd;
        ReactDOM.findDOMNode(this.refs.nation).value=person[0].nation;
        ReactDOM.findDOMNode(this.refs.countryb).value=person[0].countryb;
        ReactDOM.findDOMNode(this.refs.id).value=person[0].id;
        Meteor.call('enableEdit',person[0]._id);
    }
    editPersonalInfo(e){
        e.preventDefault();
        var person= Personalinfo.find().fetch().map((Info)=> {return Info});
        var fname=this.refs.fname.value.trim();
        var mname=this.refs.mname.value.trim();
        var lname=this.refs.lname.value.trim();
        var gender=this.refs.gender.value;
        var status=this.refs.status.value;
        var bd=this.refs.bd.value;
        var nation=this.refs.nation.value;
        var countryb=this.refs.nation.value;
        var id=this.refs.id.value;
        Meteor.call('editPersonalInfo',person[0]._id,fname,mname,lname,gender,status,bd,nation,countryb,id);
        Meteor.call('disableEdit',person[0]._id);
        alert("Data updated successful");
    }
    personalInfo(){
        return Personalinfo.find().fetch();
    }

    render(){
        
    return(
              <form onSubmit={ this.addPersonalInfo.bind(this)} >
                <div className="form-inline" >
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="fname" placeholder="First Name"  />
                </div>
                <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="mname" placeholder="Middle Name"/>
                 </div>
                <div className="form-group">
                 <input type="name" className="form-control" ref="lname" placeholder="Last Name"/>
                 </div>       
                </div>
                <div className="form-inline" >
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <label for="sel1">Select your Gender:</label>
                 <select className="form-group" className="form-control" ref="gender">
                           <option value="Male">Male</option>
                           <option value="Female">Female</option>
                </select>
                </div>
                <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="status" placeholder="Marital Status"/>
                 </div>
                <div className="form-group">
                 <input type="date" className="form-control" ref="bd" placeholder="Date of Birth"/>
                 </div>       
                </div>
                <div className="form-inline" >
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="nation" placeholder="Nationality"  />
                </div>
                <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="countryb" placeholder="Country of Birth"/>
                 </div>
                <div className="form-group">
                 <input type="number" className="form-control" ref="id" placeholder="ID Number"/>
                 </div>
                 <div >
                <button className="btn blue-gradient btn-rounded" type="button" onClick={this.enableEditPersonalInfo.bind(this)}>Load Data</button> 
                <button className="btn blue-gradient btn-rounded" type="submit" >Save</button> 
                <button className="btn blue-gradient btn-rounded" type="button" onClick={this.editPersonalInfo.bind(this)} >Update</button> 
                </div>            
                </div>  
            </form>       
    )}
}
