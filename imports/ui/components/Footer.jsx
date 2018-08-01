import React from 'react';

 function Footer() {
   
    return(
        

<footer className="page-footer font-small blue-grey lighten-5" style={{backgroundColor:'#eceff1'}}>

<div style={{backgroundColor: '#212121'}}>
  <div className="container">


    <div className="row py-4 d-flex align-items-center">

  
      <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
        <h6 className="mb-0" style={{align:'center'}}></h6>
      </div>
  

  
      <div className="col-md-6 col-lg-7 text-center text-md-right">

   
        <a className="fb-ic">
          <i className="fa fa-facebook white-text mr-4"> </i>
        </a>
   
        <a className="tw-ic">
          <i className="fa fa-twitter white-text mr-4"> </i>
        </a>

        <a className="gplus-ic">
          <i className="fa fa-google-plus white-text mr-4"> </i>
        </a>
 
        <a className="li-ic">
          <i className="fa fa-linkedin white-text mr-4"> </i>
        </a>

        <a className="ins-ic">
          <i className="fa fa-instagram white-text"> </i>
        </a>

      </div>


    </div>


  </div>
</div>

<div className="container text-center text-md-left mt-5" >

  
  <div className="row mt-3 dark-grey-text">

    
    <div className="col-md-3 col-lg-4 col-xl-3 mb-4">

    
      <h6 className="text-uppercase font-weight-bold">Company name</h6>
      <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
      <p color={{color:'white'}}>Here you can use learn and improve your skills for your future career . Collaborator is a a platform that help both Job seekers and Employers.
        We help people improve their qualification for the job and give them to our potential employers who need them</p>

    </div>
  

  
    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

    
      <h6 className="text-uppercase font-weight-bold">Products</h6>
      <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
      <p>
        <a className="dark-grey-text" href="#!">Employee Recruitment</a>
      </p>
      <p>
        <a className="dark-grey-text" href="#!">Job Posting</a>
      </p>
      <p>
        <a className="dark-grey-text" href="#!">Career Guidance</a>
      </p>
      <p>
        <a className="dark-grey-text" href="#!">Skills development</a>
      </p>

    </div>


    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

      <h6 className="text-uppercase font-weight-bold">Useful links</h6>
      <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} /> 
      <p>
        <a className="dark-grey-text" href="#!">Your Account</a>
      </p>
      <p>
        <a className="dark-grey-text" href="#!">Post a Job</a>
      </p>
      <p>
        <a className="dark-grey-text" href="#!">Recruit an Employee</a>
      </p>
      <p>
        <a className="dark-grey-text" href="#!">Help</a>
      </p>

    </div>
  


    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

  
      <h6 className="text-uppercase font-weight-bold">Contact</h6>
      <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
      <p>
        <i className="fa fa-home mr-3"></i> Kigali, KG 106, Rwanda</p>
      <p>
        <i className="fa fa-envelope mr-3"></i> info@collaborator.com</p>
      <p>
        <i className="fa fa-phone mr-3"></i> + 250 787 35 9216</p>
      <p>
        <i className="fa fa-print mr-3"></i> + 250 780 83 7606</p>

    </div>
  
  </div>


</div>



<div className="footer-copyright text-center text-black-50 py-3">© 2018 Copyright:
  <a className="dark-grey-text" href="/"> Collaborator</a>
</div>


</footer>
        );
  
}
export default Footer;