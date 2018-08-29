import React from 'react';
export default class Homepage extends React.Component{
    render(){
        return(
            <div>
                <img  src="header_bg.jpg" alt="header" style={{width:'100%'}}/>
            <div className='preloader'><div className='loaded'>&nbsp;</div></div>

        <header id="home" className="home" Style={{paddingBottom:'30px'}}>
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="home-wrapper">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="home-content text-center">
                                    <a href="#" className="btn btn-raised btn-primary">Get Started Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

       
        <section id="service" className="service sections" Style={{paddingBottom:'30px'}}>
            <div className="container">
                <div className="heading text-center">
                    <h1 Style={{paddingBottom:'30px'}}>Our Services</h1>
                    <div className="separator"></div>
                </div>
               
                <div className="row">
                    <div className="wrapper">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="service-item text-center">
                                <i className="fa fa-pencil"><img src="recruit.png" width="150" height="150"/></i>
                                <h5><b>Employee Recruitment</b></h5>
                                <div className="separator2"></div>
                                <p>We Job recruiters hire the workers with our fast omatching system.</p>
                            </div>
                        </div> 

                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="service-item text-center">
                                <i className="fa fa-camera-retro"><img src="post-it.png" width="150" height="150"/></i>
                                <h5><b>Job Posting</b></h5>
                                <div className="separator2"></div>
                                <p>Here you can post an announcement for your job and we give the employees within a few minutes</p>
                            </div>
                        </div> 

                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="service-item text-center">
                                <i className="fa fa-lightbulb-o"><img src="career.png" width="150" height="150"/></i>
                                <h5><b>Career Guidance</b></h5>
                                <div className="separator2"></div>
                                <p>We help people build their career by providing all the information that is specific to them</p>
                            </div>
                        </div> 

                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="service-item text-center">
                                <i className="fa fa-lock"><img src="training.png" width="150" height="150"/></i>
                                <h5><b>Skills and experience Development</b></h5>
                                <div className="separator2"></div>
                                <p>With our platform you will have to attend different trainings and online learning that will enhance your experience to the work</p>
                            </div>
                        </div> 

                    </div>
                </div>
            </div>      
        </section>


        <section id="portfolio" className="portfolio lightbg sections" Style={{paddingBottom:'30px'}}>
            <div className="container">
                <div className="heading text-center">
                    <h1 Style={{paddingBottom:'30px'}}>Portfolio</h1>
                    <div className="separator"></div>
                </div>
                <div className="row">
                    <div className="main_portfolio whitebackground">
                        <div className="portffolio_content text-center">
                            <div className="portffolio_menu">
                                <div className="filters-button-group">
                                    <button className="btn btn-raised btn-primary" data-filter="*">All</button>
                                    <button className="btn btn-raised btn-primary" data-filter=".metal">Employee Recruitment</button>
                                    <button className="btn btn-raised btn-primary" data-filter=".transition">Job Posting</button>
                                    <button className="btn btn-raised btn-primary" data-filter=".alkali, .alkaline-earth">Career Guidance</button>
                                    <button className="btn btn-raised btn-primary" data-filter=".alkali, .metal">Skills Development</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

      
        <section id="brand" className="brand sections" Style={{paddingBottom:'30px'}}>
            <div className="container">
                <div className="heading text-center">
                    <h1 Style={{paddingBottom:'30px'}}>Recent Brands we’ve worked with</h1>
                    <div className="separator"></div>
                </div>
            
                <div className="row">
                    <div className="wrapper brand-category ">
                        <div className="brand-item">
                            <div className="col-md-2 col-sm-2 col-xs-12">
                                <div className="brand-identity">
                                    <img src="facebook.png" alt="brand" style={{width:'120px',height:'120px'}} />
                                </div>
                            </div>

                            <div className="col-md-2 col-sm-2 col-xs-12">
                                <div className="brand-identity">
                                    <img src="facebook.jpg" alt="brand" style={{width:'120px',height:'100px'}} />
                                </div>
                            </div>

                            <div className="brand-item col-md-2 col-sm-2 col-xs-12">
                                <div className="brand-identity">
                                    <img src="google.png" alt="brand"  style={{width:'120px',height:'100px'}}/>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-12">
                                <div className="brand-identity">
                                    <img src="hexakomb.jpg" alt="brand" style={{width:'120px',height:'100px'}} />
                                </div>
                            </div>

                            <div className="col-md-2 col-sm-2 col-xs-12">
                                <div className="brand-identity">
                                    <img src="facebook.jpg" alt="brand" style={{width:'120px',height:'100px'}} />
                                </div>
                            </div>

                            <div className="brand-item col-md-2 col-sm-2 col-xs-12">
                                <div className="brand-identity">
                                    <img src="google.png" alt="brand"  style={{width:'120px',height:'100px'}}/>
                                </div>
                            </div>
                           
                        
                        </div>
                    </div>
                </div>
            </div>      
        </section>
        <section id="testimonial" className="testimonial lightbg sections" Style={{paddingBottom:'30px'}}>
                
            <div >
                <div className="heading text-center">
              

                    <h1 Style={{paddingBottom:'30px'}}>Testimonial </h1>
                    <div className="separator"></div>
                </div>
                
                <div className="row">
                    <div className="col-md-12" data-wow-delay="0.2s">
                        <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                            <div className="carousel-inner text-center margin-top-60">

                              
                                <div className="item active">
                                    <div className="row">
                                        <div className="col-sm-6 col-sm-offset-3 details">
                                            <p>"I got due to collaborators and I am earning a lot of cash. I have now a new life of joy and happiness"</p>
                                            <small>Jennah from <a href="https://www.facebook.com/jennah.haque">facebook.com/jennah.haque</a></small>
                                        </div>
                                    </div>
                                </div>
                              
                                <div className="item">
                                    <div className="row">
                                        <div className="col-sm-6 col-sm-offset-3 details">

                                            <p>" I spent many years searching for job,I visited a lot of job psting website and none was able to give me a job.But when I joined Collaborators,things changed and now I am working in a good company of my dream."</p>
                                            <small>Lucky John from <a href="https://www.facebook.com/mbikeshimana.john">facebook.com/mbikeshimana.john</a></small>
                                        </div>
                                    </div>
                                </div>
                              
                                <div className="item">
                                    <div className="row">
                                        <div className="col-sm-6 col-sm-offset-3 details">
                                            <p>"I was fired by different companies due to lack of qualification and I came to find Collaborators and learned with their resources and It is been 5 years without a problem on my job"</p>
                                            <small> <a href="https://www.facebook.com/nzambazamariya.odile">facebook.com/nzambazamariya.odile</a></small>
                                        </div>
                                    </div>

                                </div>
                            </div>

                           
                            <a data-slide="prev" href="#quote-carousel" className="left carousel-control"><i className="fa fa-chevron-left"></i></a>
                            <a data-slide="next" href="#quote-carousel" className="right carousel-control"><i className="fa fa-chevron-right"></i></a>
                        </div>
                    </div>

                </div>
            </div>     
        </section>
        </div>
        )
    }
}