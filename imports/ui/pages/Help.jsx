import React from 'react';

function Help() {
  return (
   <div className="container">
   
   <section id="service" className="service sections" Style={{paddingBottom:'30px'}}>
            <div className="container">
                <div className="heading text-center">
                    <h1 Style={{paddingBottom:'30px'}}>Collaborator's platform-How does it work?</h1>
                    <div className="separator"></div>
                </div>
               
                <div className="row">
                    <div className="wrapper">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="service-item text-center">
                                <i className="fa fa-pencil"><img src="membership.png" width="150" height="150"/></i>
                                <h5><b>1.Register</b></h5>
                                <div className="separator2"></div>
                                <p>Create an account with us.</p>
                            </div>
                        </div> 

                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="service-item text-center">
                                <i className="fa fa-camera-retro"><img src="completed.png" width="150" height="150"/></i>
                                <h5><b>2.Complete the profile</b></h5>
                                <div className="separator2"></div>
                                <p>Go on and complete your profile</p>
                            </div>
                        </div> 

                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="service-item text-center">
                                <i className="fa fa-lightbulb-o"><img src="career.png" width="150" height="150"/></i>
                                <h5><b>3.Learn</b></h5>
                                <div className="separator2"></div>
                                <p>Learn with recommended lessons</p>
                            </div>
                        </div> 

                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="service-item text-center">
                                <i className="fa fa-lock"><img src="training.png" width="150" height="150"/></i>
                                <h5><b>4.Attend the trainings</b></h5>
                                <div className="separator2"></div>
                                <p>Attend in-person trainings to enhance your experience</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="service-item text-center">
                                <i className="fa fa-lock"><img src="post-it.png" width="150" height="150"/></i>
                                <h5><b>Get posted</b></h5>
                                <div className="separator2"></div>
                                <p>Now you will be posted in recruit page</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="service-item text-center">
                                <i className="fa fa-lock"><img src="recruit.png" width="150" height="150"/></i>
                                <h5><b>Be hired</b></h5>
                                <div className="separator2"></div>
                                <p>Potential employers will be able to recruit you via our platform</p>
                            </div>
                        </div>   

                    </div>
                </div>
            </div>      
        </section>
   
   </div>
  )
}

export default Help;
