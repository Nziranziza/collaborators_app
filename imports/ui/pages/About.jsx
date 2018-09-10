import React from 'react';

function About() {
  return (
    <div>
       <p className="h1 text-center mb-4" style={{paddingBottom:'10px'}}>About Collaborators</p>
      <div className="container">
      <section className="jumbotron">
    <div className="row">
    <div className="col-sm-4">
         <p className="h2 text-center mb-4" style={{paddingBottom:'10px'}}>Description</p>
         <div> Collaborator is a platform created to help employees and employers.
          We offer a free online resources to our users to improve their knowledge about
          their career.We also provide in person trainig and this helps in gaining the experience.We have different companies we work with and we offer you a job to join those companies.
          We help the recruiters as well to get the workers get the workers that meet their criteria.</div>
    </div>
    <div className="col-sm-4">
          <p className="h2 text-center mb-4" style={{paddingBottom:'10px'}}>Mission</p>
          <div>
              <ul>
                  <li>To provide jobs to all jobseekers in an easy way</li>
                  <li>To provide resources to help job seekers build their portfolio</li>
                  <li>To offer highly qualified,trusthworthy employees to the recruiters</li>
                  <li>To minimize the cost and time of getting a new employee</li>
                  <li>To minimize the cost of getting a job</li>
              </ul>
          </div>
    </div>
    <div className="col-sm-4">
         <p className="h2 text-center mb-4" style={{paddingBottom:'10px'}}>Vision</p>
         <div>To be the first leading company that provide highly qualified,trusthworthy employees in Rwanda and East Africa</div>
    </div>
  </div>
  </section>
  <section className="jumbotron">
  <p className="h2 text-center mb-4" style={{paddingBottom:'10px'}}>Patterns</p>
  <div className="row">
        <div className="col-sm-4">
        <div className="service-item text-center">
         <img className="card-img-top" src="https://www.hexakomb.com/assets/client_logos/hexakomb.jpg" alt="Card image"  />
         <div className="card-body">
         <h4 className="card-title">Hexakomb</h4>
         <h5 className="card-text"> HEXAKOMB Ltd. is a software and IT consulting company based in Rwanda. 
         </h5>
         <a href="https://www.hexakomb.com/" className="btn btn-primary">Visit site</a>
        </div>
        </div>
        </div>

      <div  className="col-sm-4" >
      <div className="service-item text-center">
         <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Logo_Tigo.svg/1280px-Logo_Tigo.svg.png" alt="Card image"  />
         <div className="card-body">
         <h4 className="card-title">Tigo</h4>
         <h5 className="card-text"> Tigo is a subsidiary of Millicom investing in Rwanda's digital innovation space. 
      
         </h5>
         <a href="http://www.tigo.co.rw/" className="btn btn-primary">Visit site</a>
      </div>
      </div>
      </div>
      <div className="col-sm-4" >
      <div className="service-item text-center">
         <img className="card-img-top" src="https://lh3.googleusercontent.com/ZZPdzvlpK9r_Df9C3M7j1rNRi7hhHRvPhlklJ3lfi5jk86Jd1s0Y5wcQ1QgbVaAP5Q=s180-rw" alt="Card image"  />
         <div className="card-body">
         <h4 className="card-title">Facebook</h4>
         <h5 className="card-text"> Connect with friends, family and other people you know.Share videos and photos 
       </h5>
         <a href="http://www.facebook.com" className="btn btn-primary">Visit site</a>
      </div>
      </div>
      </div>
  
      </div>
      </section>
  
      <div className="col-sm-6">
      <p className="h2 text-center mb-4" style={{paddingBottom:'10px'}}>Founders</p>

      <div className="col-md-5 ins-vcard">
       <a href="http://gsl.mit.edu/accounts/1815/"> 
       <img className="img-circle" src="http://gsl.mit.edu/media/cache/9a/66/9a66c5c39ee49e7d55ea704839bd701a.jpg" width="150" height="150"/>
       <p className="ins-fullname">Nzambazamariya Odile</p>
       </a>
       <p className="ins-position">Computer Engineering</p>
       <p className="ins-affiliation">University of Rwanda</p>
       </div>

       <div className="col-md-5 ins-vcard">
       <a href="http://gsl.mit.edu/accounts/1813/"> 
       <img className="img-circle" src="http://gsl.mit.edu/media/cache/9d/9d/9d9d60a4b9ada5b021e1079d4df88024.jpg" width="150" height="150"/>
       <p className="ins-fullname">Nziranziza Daniel</p>
       </a>
       <p className="ins-position">Computer Engineering</p>
       <p className="ins-affiliation">University of Rwanda</p>
       </div>

      </div>
      <div className="col-sm-6">     
<section className="section">

  
<h2 className="h1-responsive font-weight-bold text-center my-5">Contact us</h2>

<p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    matter of hours to help you.</p>

<div className="row">

 
    <div className="col-md-9 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

           
            <div className="row">

              
                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" id="name" name="name" className="form-control"/>
                        <label for="name" className="">Your name</label>
                    </div>
                </div>
               

              
                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" id="email" name="email" className="form-control"/>
                        <label for="email" className="">Your email</label>
                    </div>
                </div>
            </div>
          
        
            <div className="row">
                <div className="col-md-12">
                    <div className="md-form mb-0">
                        <input type="text" id="subject" name="subject" className="form-control"/>
                        <label for="subject" className="">Subject</label>
                    </div>
                </div>
            </div>
           

         
            <div className="row">

             
                <div className="col-md-12">

                    <div className="md-form">
                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                        <label for="message">Your message</label>
                    </div>

                </div>
            </div>
           

        </form>

        <div className="text-center text-md-left">
            <a className="btn btn-primary">Send</a>
        </div>
        <div className="status"></div>
    </div>
    


    <div className="col-md-3 text-center">
        <ul className="list-unstyled mb-0">
            <li><i className="fa fa-map-marker fa-2x"></i>
                <p>Kigali,KG 106, Rwanda</p>
            </li>

            <li><i className="fa fa-phone mt-4 fa-2x"></i>
                <p>+ 250 787 35 9216</p>
            </li>

            <li><i className="fa fa-envelope mt-4 fa-2x"></i>
                <p>info@collaborators.com</p>
            </li>
        </ul>
    </div>

</div>

</section>

      </div>
  
      </div>
    </div>
  );
}

export default About;
