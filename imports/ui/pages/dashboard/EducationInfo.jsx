import React from 'react';
import DashboardNav from './DashboardNav.jsx';
import {Educationinfo} from '../../../api/tasks.js';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactDOM from 'react-dom';

class DisplayEducationInfo extends React.Component{
    render(){
        return(
        <div className="panel panel-default">
        <div className="panel-heading">
            <i className="fa fa-bar-chart-o fa-fw"></i> Education Information
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
                                          <th>Middle School</th>
                                          <th>High School</th>
                                          <th>College</th>   
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr className="table-info">
                                          <th scope="row">Country</th>
                                          <td>{this.props.mcountry}</td>
                                          <td>{this.props.hcountry}</td>
                                          <td>{this.props.bcountry}</td>
                                       </tr>   
                                      <tr>
                                          <th scope="row">District</th>
                                          <td>{this.props.mdistrict}</td>
                                          <td>{this.props.hdistrict}</td>
                                          <td>{this.props.bdistrict}</td>
                                      </tr>
                                      <tr class="table-info">
                                          <th scope="row">School/University</th>
                                          <td>{this.props.mschool}</td>
                                          <td>{this.props.hschool}</td>
                                          <td>{this.props.university}</td>   
                                      </tr>
                                      <tr>
                                          <th scope="row">Status</th>
                                          <td>{this.props.mstatus}</td>
                                          <td>{this.props.hstatus}</td>
                                          <td>{this.props.bstatus}</td>    
                                      </tr>
                                      <tr>
                                          <th scope="row">Major</th>
                                          <td></td>
                                          <td>{this.props.hmajor}</td>
                                          <td>{this.props.faculty}</td>    
                                      </tr>
                                      <tr>
                                          <th scope="row">Start date</th>
                                          <td>{this.props.mstart}</td>
                                          <td>{this.props.hstart}</td>
                                          <td>{this.props.bstart}</td>    
                                      </tr>
                                      <tr>
                                          <th scope="row">End date</th>
                                          <td>{this.props.mend}</td>
                                          <td>{this.props.hend}</td>
                                          <td>{this.props.bend}</td>    
                                      </tr>
                                      <tr>
                                          <th scope="row">Grade</th>
                                          <td>{this.props.mgrade}</td>
                                          <td>{this.props.hgrade}</td>
                                          <td>{this.props.bgrade}</td>    
                                      </tr>
                                  </tbody>
                              </table>
                              
                                                <div id="morris-area-chart"></div>
                                                              </div>
                </div>



        )
    }
}

class HandleEducationInfo extends React.Component{
    constructor(){
        super();
        this.state={subscription:{
          educationInfo: Meteor.subscribe("educationInfo")
        }
        }
      }
      componentWillUnmount(){
        this.state.subscription.educationInfo.stop();
      }
      educationInfo(){
        return Educationinfo.find().fetch();
    }

    addEducationInfo(e){
        e.preventDefault();
        //getting middle school information
        var mcountry=this.refs.mcountry.value.trim();
        var mdistrict=this.refs.mdistrict.value.trim();
        var mschool=this.refs.mschool.value.trim();
        var mstatus=this.refs.mstatus.value.trim();
        var mstart=this.refs.mstart.value.trim();
        var mend=this.refs.mend.value.trim();
        var mgrade=this.refs.mgrade.value.trim();
        // getting high school information
        var hcountry=this.refs.hcountry.value.trim();
        var hdistrict=this.refs.hdistrict.value.trim();
        var hschool=this.refs.hschool.value.trim();
        var hstatus=this.refs.hstatus.value.trim();
        var hstart=this.refs.hstart.value.trim();
        var hend=this.refs.hend.value.trim();
        var hgrade=this.refs.hgrade.value.trim();
        var hmajor=this.refs.hmajor.value.trim();
        // getting bachelor's degree information
        var bcountry=this.refs.bcountry.value.trim();
        var bdistrict=this.refs.bdistrict.value.trim();
        var university=this.refs.university.value.trim();
        var bstatus=this.refs.bstatus.value.trim();
        var bstart=this.refs.bstart.value.trim();
        var bend=this.refs.bend.value.trim();
        var bgrade=this.refs.bgrade.value.trim();
        var faculty=this.refs.faculty.value.trim();
        var department=this.refs.department.value.trim();
        Meteor.call('addEducationInfo',mcountry,mdistrict,mschool,mstatus,mstart,mend,mgrade,hcountry,hdistrict,hschool,hstatus,hstart,hend,hgrade,hmajor,bcountry,bdistrict,university,faculty,department,bstatus,bstart,bend,bgrade);
        alert("The data saved successful");
    }
    editEducationInfo(e){
        e.preventDefault();
        var education= Educationinfo.find().fetch().map((Info)=> {return Info});
        var father=this.refs.father.value.trim();
        var mother=this.refs.mother.value.trim();
        var siblings=this.refs.siblings.value.trim();
        var income=this.refs.income.value;
        Meteor.call('editEducationInfo',education[0]._id,father,mother,siblings,income);
        alert("The data updated successful");
    }
    enableEditEducationInfo(e){
        e.preventDefault();
        var education= Educationinfo.find().fetch().map((Info)=> {return Info});
        ReactDOM.findDOMNode(this.refs.father).value=education[0].father;
        ReactDOM.findDOMNode(this.refs.mother).value=education[0].mother;
        ReactDOM.findDOMNode(this.refs.siblings).value=education[0].siblings;
        ReactDOM.findDOMNode(this.refs.income).value=education[0].income;    
    }


    render(){
    return(<form onSubmit={this.addEducationInfo.bind(this)} >
                <h4>Middle school Information</h4>
                <div className="form-inline" > 
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="mcountry" placeholder="Country"  />
                </div>
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="mdistrict" placeholder="District"/>
                 </div>
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="mschool" placeholder="School"/>
                 </div>
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="mstatus" placeholder="Status"/>
                 </div>
                </div>
                <div className="form-inline" >
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="mstart" placeholder="Start Date"  />
                </div>
                <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="mend" placeholder="End Date"/>
                 </div>
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="mgrade" placeholder="Grade"/>
                 </div>
                 <h4>High school Information</h4>
                <div className="form-inline" >
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="hcountry" placeholder="Country"  />
                </div>
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="hdistrict" placeholder="District"/>
                 </div>
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="hschool" placeholder="School"/>
                 </div>
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="hstatus" placeholder="Status"/>
                 </div>
                </div>
                <div className="form-inline" >
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="hstart" placeholder="Start Date"  />
                </div>
                <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="hend" placeholder="End Date"/>
                 </div>
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="hmajor" placeholder="Major"/>
                 </div>
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="hgrade" placeholder="Grade"/>
                 </div>
                 </div>
                 <h4>Bachelor's Degree Information</h4>
                <div className="form-inline" >
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="bcountry" placeholder="Country"  />
                </div>
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="bdistrict" placeholder="District"/>
                 </div>
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="university" placeholder="University"/>
                 </div>
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="faculty" placeholder="Faculty"/>
                 </div>
                </div>
                <div className="form-inline" >
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="department" placeholder="Department"  />
                </div>
                <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="bstatus" placeholder="Status"/>
                 </div>
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="bstart" placeholder="Start Date"/>
                 </div>
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="bend" placeholder="End Date"/>
                 </div>
                 </div>
                 <div className="form-inline" >
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="bgrade" placeholder="Grade"  />
                </div>
                 <div>
                 <button className="btn blue-gradient btn-rounded" type="button" onClick={this.enableEditEducationInfo.bind(this)}>Load Data</button> 
                <button className="btn blue-gradient btn-rounded" type="submit" >Save</button> 
                <button className="btn blue-gradient btn-rounded" type="button" onClick={this.editEducationInfo.bind(this)} >Update</button> 
                </div>            
                </div> 
                </div> 
            </form>
    )
}
}

export default class EducationInfo extends TrackerReact(React.Component) {
    constructor(){
        super();
        this.state={subscription:{
        educationInfo: Meteor.subscribe("educationInfo")
        },
        edit:false
        }
      }
      componentWillUnmount(){
        this.state.subscription.educationInfo.stop();
      }
      educationInfo(){
        return Educationinfo.find().fetch();
    }
    enableEditEducationInfo(e){
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
                        <h1 className="page-header">Education Information<button className="btn blue-gradient btn-rounded" type="button" onClick={this.enableEditEducationInfo.bind(this)} style={{float:'right'}}>{buttonName}</button></h1>
                    </div>
                </div>
              { this.state.edit ? <HandleEducationInfo/>:
              <div>{this.educationInfo().map((info)=>{return <DisplayEducationInfo 
                mcountry={info.mcountry} hcountry={info.hcountry} bcountry={info.bcountry}
                mdistrict={info.mdistrict} hdistrict={info.hdistrict} bdistrict={info.bdistrict}
                mschool={info.mschool} hschool={info.hschool} university={info.university}
                hmajor={info.hmajor} faculty={info.faculty}
                mstart={info.mstart} hstart={info.hstart} bstart={info.bstart}
                mgrade={info.mgrade} hgrade={info.hagrade} bgrade={info.bgrade} 
                mstatus={info.mstatus} hstatus={info.hstatus} bstatus={info.bstatus} 
                mend={info.mend} hend={info.hend} bend={info.bend} 
                />})}</div>
              }
          </div>
        </div>
   
        )
    }
}

