import React from 'react';

function DashboardNav(){
    return(
        <nav className="navbar navbar-default " role="navigation" style={{ marginBottom: 0 }}>

                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#dash-nav">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="index.html">Dashboard</a>
                </div>
                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="fa fa-envelope fa-fw"></i> <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-messages">
                            <li>
                                <a href="#">
                                    <div>
                                        <strong>John Smith</strong>
                                        <span className="pull-right text-muted">
                                            <em>Yesterday</em>
                                        </span>
                                    </div>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <strong>John Smith</strong>
                                        <span className="pull-right text-muted">
                                            <em>Yesterday</em>
                                        </span>
                                    </div>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <strong>John Smith</strong>
                                        <span className="pull-right text-muted">
                                            <em>Yesterday</em>
                                        </span>
                                    </div>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a className="text-center" href="#">
                                    <strong>Read All Messages</strong>
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="fa fa-tasks fa-fw"></i> <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-tasks">
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="fa fa-bell fa-fw"></i> <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-alerts">
                            <li>
                                <a href="#">
                                    <div>
                                        <i className="fa fa-comment fa-fw"></i> New Comment
                           <span className="pull-right text-muted small">4 minutes ago</span>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                           <span className="pull-right text-muted small">12 minutes ago</span>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <i className="fa fa-envelope fa-fw"></i> Message Sent
                           <span className="pull-right text-muted small">4 minutes ago</span>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <i className="fa fa-tasks fa-fw"></i> New Task
                           <span className="pull-right text-muted small">4 minutes ago</span>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <i className="fa fa-upload fa-fw"></i> Server Rebooted
                           <span className="pull-right text-muted small">4 minutes ago</span>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a className="text-center" href="#">
                                    <strong>See All Alerts</strong>
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                        </ul>
                    </li>
                </ul>
     {/*side bar panel start from here*/}
                <div className="navbar-default sidebar" role="navigation">
                    <div className="sidebar-nav navbar-collapse" id="dash-nav">

                        <ul className="nav" id="side-menu">
                            <li className="sidebar-search">
                                <div className="input-group custom-search-form">
                                    <input type="text" className="form-control" placeholder="Search..." />
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="button">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <a href="/dashboard"><i className="fa fa-dashboard fa-fw"></i> Dashboard</a>
                            </li>
                            <li>
                                <a href="/dashboard/personalinfo"><i className="fa fa-bar-chart-o fa-fw"></i> Personal Information<span className="fa arrow"></span></a>
                            </li>
                            <li>
                                <a href="/dashboard/familyinfo"><i className="fa fa-table fa-fw"></i>Family Information</a>
                            </li>
                            <li>
                                <a href="/dashboard/contactinfo"><i className="fa fa-edit fa-fw"></i> Contact Info</a>
                            </li>
                            <li>
                                <a href="/dashboard/educationinfo"><i className="fa fa-edit fa-fw"></i> Education Information</a>
                            </li>
                            <li>
                                <a href="/dashboard/languagedetails"><i className="fa fa-sitemap fa-fw"></i>Language Details<span className="fa arrow"></span></a>
                            </li>
                            <li>
                                <a href="/dashboard/workexperience"><i className="fa fa-files-o fa-fw"></i>Work Experience<span className="fa arrow"></span></a>
                            </li>
                            <li>
                                <a href="/dashboard/academic"><i className="fa fa-wrench fa-fw"></i>Academic Qualification<span className="fa arrow"></span></a>
                            </li>
                            <li>
                                <a href="/dashboard/socialactivities"><i className="fa fa-wrench fa-fw"></i>Social Activities<span className="fa arrow"></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
        {/*Side bar panel ends here*/}
            </nav>
    );
}
export default DashboardNav;