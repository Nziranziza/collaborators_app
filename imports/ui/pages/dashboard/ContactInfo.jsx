import React from 'react';
import DashboardNav from './DashboardNav.jsx';
import {Contactinfo} from '../../../api/tasks.js';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactDOM from 'react-dom';

class DisplayContactInfo extends React.Component{
    render(){
        return( 
        <div className="panel panel-default">
        <div className="panel-heading">
            <i className="fa fa-bar-chart-o fa-fw"></i> Contact Information
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
                                          <th scope="row">Country</th>
                                          <td>{this.props.country}</td>
                                       </tr>   
                                      <tr>
                                          <th scope="row">Province</th>
                                          <td>{this.props.province}</td>
                                      </tr>
                                      <tr class="table-info">
                                          <th scope="row">District</th>
                                          <td>{this.props.district}</td>   
                                      </tr>
                                      <tr>
                                          <th scope="row">Sector</th>
                                          <td>{this.props.sector}</td>    
                                      </tr>
                                      <tr>
                                          <th scope="row">Cell</th>
                                          <td>{this.props.cell}</td>    
                                      </tr>
                                      <tr>
                                          <th scope="row">Village</th>
                                          <td>{this.props.village}</td>    
                                      </tr>
                                      <tr>
                                          <th scope="row">Email</th>
                                          <td>{this.props.email}</td>    
                                      </tr>
                                      <tr>
                                          <th scope="row">Phone</th>
                                          <td>{this.props.phone}</td>    
                                      </tr>
                                      <tr>
                                          <th scope="row">Social Media</th>
                                          <td>{this.props.social}</td>    
                                      </tr>
                                  </tbody>
                              </table>
                              
                                                <div id="morris-area-chart"></div>
                                                              </div>
                </div>

        )
    }
}

class HandleContactInfo extends React.Component{
    constructor(){
        super();
        this.state={subscription:{
          contactInfo: Meteor.subscribe("contactInfo")
        }
        }
      }
      componentWillUnmount(){
        this.state.subscription.contactInfo.stop();
      }
      contactInfo(){
        return Contactinfo.find().fetch();
    }

    addContactInfo(e){
        e.preventDefault();
        var country=this.refs.country.value.trim();
        var province=this.refs.province.value.trim();
        var district=this.refs.district.value.trim();
        var sector=this.refs.sector.value.trim();
        var cell=this.refs.cell.value.trim();
        var village=this.refs.village.value.trim();
        var email=this.refs.email.value.trim();
        var phone=this.refs.phone.value.trim();
        var social=this.refs.social.value.trim();
        Meteor.call('addContactInfo',country,province,district,sector,cell,village,phone,email,social);
        alert("The data saved successful");
    }
    editContactInfo(e){
        e.preventDefault();
        var contact= Contactinfo.find().fetch().map((Info)=> {return Info});
        var country=this.refs.country.value.trim();
        var province=this.refs.province.value.trim();
        var district=this.refs.district.value.trim();
        var sector=this.refs.sector.value.trim();
        var cell=this.refs.cell.value.trim();
        var village=this.refs.village.value.trim();
        var email=this.refs.email.value.trim();
        var phone=this.refs.phone.value.trim();
        var social=this.refs.social.value.trim();
        Meteor.call('editContactInfo',contact[0]._id,country,province,district,sector,cell,village,phone,email,social);
        alert("The data updated successful");
    }
    enableEditContactInfo(e){
        e.preventDefault();
        var contact= Contactinfo.find().fetch().map((Info)=> {return Info});
        ReactDOM.findDOMNode(this.refs.country).value=contact[0].country;
        ReactDOM.findDOMNode(this.refs.province).value=contact[0].province;
        ReactDOM.findDOMNode(this.refs.district).value=contact[0].district;
        ReactDOM.findDOMNode(this.refs.sector).value=contact[0].sector;
        ReactDOM.findDOMNode(this.refs.cell).value=contact[0].cell;
        ReactDOM.findDOMNode(this.refs.village).value=contact[0].village;
        ReactDOM.findDOMNode(this.refs.email).value=contact[0].email;
        ReactDOM.findDOMNode(this.refs.phone).value=contact[0].phone;
        ReactDOM.findDOMNode(this.refs.social).value=contact[0].social;
        
    }

    render(){
    return(<form onSubmit={this.addContactInfo.bind(this)}>
                <div className="form-inline" >
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="country" placeholder="Country"  />
                </div>
                <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="province" placeholder="Province"/>
                 </div>
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="district" placeholder="District"/>
                 </div>
                </div>
                <div className="form-inline" >
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="sector" placeholder="Sector"  />
                </div>
                <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="cell" placeholder="Cell"/>
                 </div>
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="village" placeholder="Village"/>
                 </div>
                 </div>
                 <div className="form-inline" >
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="email" placeholder="Email"  />
                </div>
                <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="phone" placeholder="Phone"/>
                 </div>
                 <div className="form-group" style={{paddingRight:'10px'}}>
                 <input type="name" className="form-control" ref="social" placeholder="Socail Media"/>
                 </div>
                 <div>
                 <button className="btn blue-gradient btn-rounded" type="button" onClick={this.enableEditContactInfo.bind(this)}>Load Data</button> 
                <button className="btn blue-gradient btn-rounded" type="submit" >Save</button> 
                <button className="btn blue-gradient btn-rounded" type="button" onClick={this.editContactInfo.bind(this)} >Update</button> 
                </div>            
                </div>  
            </form>
    )
}
}

export default class ContactInfo extends TrackerReact(React.Component) {
    constructor(){
        super();
        this.state={subscription:{
        contactInfo: Meteor.subscribe("contactInfo")
        },
        edit:false
        }
      }
      componentWillUnmount(){
        this.state.subscription.contactInfo.stop();
      }
      contactInfo(){
        return Contactinfo.find().fetch();
    }
    enableEditContactInfo(e){
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
                        <h1 className="page-header">Contact Info(Current)<button className="btn blue-gradient btn-rounded" type="button" onClick={this.enableEditContactInfo.bind(this)} style={{float:'right'}}>{buttonName}</button></h1>
                    </div>
                </div>
              { this.state.edit ? <HandleContactInfo/>:
              <div>{this.contactInfo().map((info)=>{return <DisplayContactInfo country={info.country} province={info.province} district={info.district} cell={info.cell} sector={info.sector} village={info.village} email={info.email} phone={info.phone} social={info.social}/>})}</div>
              }
          </div>
        </div>
   
        )
    }
}

