import React from 'react';
import DashboardNav from './DashboardNav.jsx';
import {Familyinfo} from '../../../api/tasks.js';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactDOM from 'react-dom';

class DisplayFamilyInfo extends React.Component{
    render(){
        return(
        <div className="panel panel-default">
        <div className="panel-heading">
            <i className="fa fa-bar-chart-o fa-fw"></i> Family Information
             <div className="pull-right">
                <div className="btn-group">
                    <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                        Actions
                <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu pull-right" role="menu">
                        <li><a>Edit</a>
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
                                          <th scope="row">Father Name</th>
                                          <td>{this.props.papa}</td>
                                       </tr>   
                                      <tr>
                                          <th scope="row">Mother Name</th>
                                          <td>{this.props.mama}</td>
                                      </tr>
                                      <tr class="table-info">
                                          <th scope="row">Number of Siblings</th>
                                          <td>{this.props.siblings}</td>   
                                      </tr>
                                      <tr>
                                          <th scope="row">Total Monthly Income</th>
                                          <td>{this.props.income}</td>    
                                      </tr>
                                  </tbody>
                              </table>
                              
                                                <div id="morris-area-chart"></div>
                                                              </div>
                </div>



        )
    }
}

class HandleFamilyInfo extends React.Component{
    constructor(){
        super();
        this.state={subscription:{
          familyInfo: Meteor.subscribe("familyInfo")
        }
        }
      }
      componentWillUnmount(){
        this.state.subscription.familyInfo.stop();
      }
      familyInfo(){
        return Familyinfo.find().fetch();
    }

    addFamilyInfo(e){
        e.preventDefault();
        var father=this.refs.father.value.trim();
        var mother=this.refs.mother.value.trim();
        var siblings=this.refs.siblings.value.trim();
        var income=this.refs.income.value;
        Meteor.call('addFamilyInfo',father,mother,siblings,income);
        alert("The data saved successful");
    }
    editFamilyInfo(e){
        e.preventDefault();
        var family= Familyinfo.find().fetch().map((Info)=> {return Info});
        var father=this.refs.father.value.trim();
        var mother=this.refs.mother.value.trim();
        var siblings=this.refs.siblings.value.trim();
        var income=this.refs.income.value.trim();
        Meteor.call('editFamilyInfo',family[0]._id,father,mother,siblings,income);
        alert("The data updated successful");
    }
    enableEditFamilyInfo(e){
        e.preventDefault();
        var family= Familyinfo.find().fetch().map((Info)=> {return Info});
        ReactDOM.findDOMNode(this.refs.father).value=family[0].father;
        ReactDOM.findDOMNode(this.refs.mother).value=family[0].mother;
        ReactDOM.findDOMNode(this.refs.siblings).value=family[0].siblings;
        ReactDOM.findDOMNode(this.refs.income).value=family[0].income;    
    }


    render(){
    return(<form onSubmit={this.addFamilyInfo.bind(this)}>
                <div className="form-inline" >
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="father" placeholder="Father Names"  />
                </div>
                <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="mother" placeholder="Mother Names"/>
                 </div>
               
                </div>
                <div className="form-inline" >
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="siblings" placeholder="Number of siblings"  />
                </div>
                <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="income" placeholder="Total Monthly Income"/>
                 </div>
                 <div>
                 <button className="btn blue-gradient btn-rounded" type="button" onClick={this.enableEditFamilyInfo.bind(this)}>Load Data</button> 
                <button className="btn blue-gradient btn-rounded" type="submit" >Save</button> 
                <button className="btn blue-gradient btn-rounded" type="button" onClick={this.editFamilyInfo.bind(this)} >Update</button> 
                </div>            
                </div>  
            </form>
    )
}
}

export default class FamilyInfo extends TrackerReact(React.Component) {
    constructor(){
        super();
        this.state={subscription:{
        familyInfo: Meteor.subscribe("familyInfo")
        },
        edit:false
        }
      }
      componentWillUnmount(){
        this.state.subscription.familyInfo.stop();
      }
      familyInfo(){
        return Familyinfo.find().fetch();
    }
    enableEditFamilyInfo(e){
        e.preventDefault();
        this.setState({
            edit:!this.state.edit
        })
       
    }
    render(){
        const buttonName= this.state.edit? "Disable Edit":"Enable Edit";
        return(<div>
            <DashboardNav />
        <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Family Information<button className="btn blue-gradient btn-rounded" type="button" onClick={this.enableEditFamilyInfo.bind(this)} style={{marginLeft:"548px"}}>{buttonName}</button></h1>
                    </div>
                </div>
              { this.state.edit ? <HandleFamilyInfo/>:
              <div>{this.familyInfo().map((info)=>{return <DisplayFamilyInfo papa={info.father} mama={info.mother} siblings={info.siblings} income={info.tincome} />})}</div>
              }
          </div>
        </div>
   
        )
    }
}

