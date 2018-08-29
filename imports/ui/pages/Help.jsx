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
                                <i className="fa fa-pencil"><img src="recruit.png" width="150" height="150"/></i>
                                <h5><b>Register</b></h5>
                                <div className="separator2"></div>
                                <p>We Job recruiters hire the workers with our fast omatching system.</p>
                            </div>
                        </div> 

                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="service-item text-center">
                                <i className="fa fa-camera-retro"><img src="post-it.png" width="150" height="150"/></i>
                                <h5><b>Complete the profile</b></h5>
                                <div className="separator2"></div>
                                <p>Here you can post an announcement for your job and we give the employees within a few minutes</p>
                            </div>
                        </div> 

                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="service-item text-center">
                                <i className="fa fa-lightbulb-o"><img src="career.png" width="150" height="150"/></i>
                                <h5><b>Learn</b></h5>
                                <div className="separator2"></div>
                                <p>We help people build their career by providing all the information that is specific to them</p>
                            </div>
                        </div> 

                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="service-item text-center">
                                <i className="fa fa-lock"><img src="training.png" width="150" height="150"/></i>
                                <h5><b>Attend the trainings</b></h5>
                                <div className="separator2"></div>
                                <p>With our platform you will have to attend different trainings and online learning that will enhance your experience to the work</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="service-item text-center">
                                <i className="fa fa-lock"><img src="training.png" width="150" height="150"/></i>
                                <h5><b>Get posted</b></h5>
                                <div className="separator2"></div>
                                <p>With our platform you will have to attend different trainings and online learning that will enhance your experience to the work</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="service-item text-center">
                                <i className="fa fa-lock"><img src="training.png" width="150" height="150"/></i>
                                <h5><b>Be hired</b></h5>
                                <div className="separator2"></div>
                                <p>With our platform you will have to attend different trainings and online learning that will enhance your experience to the work</p>
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
