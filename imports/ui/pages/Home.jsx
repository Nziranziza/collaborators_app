import React from "react";
import { Meteor } from "meteor/meteor";
import Homepage from "../pages/Homepage.jsx";
import SignupLogin from "../pages/SignupLogin.jsx";
import TrackerReact from "meteor/ultimatejs:tracker-react";
import users from "../../../__mocks__/user";
import jobs from "../../../__mocks__/jobs";
import howItWorks from "../../../__mocks__/howItWorks";

//form function
class Homeform extends TrackerReact(React.Component) {
  render() {
    return Meteor.userId() ? (
      <Homepage />
    ) : (
      <div>
        <section className="welcome-section">
          <div className="container">
            <div className="welcome-section-container">
              <div>
                <h2>Welcome to Collaborators</h2>
                <p>Get a job or an employee with Collaborators</p>
              </div>
              <div className="welcome-section__right">
                <h2>Get started</h2>
                <input
                  type="text"
                  placeholder="Enter email to get started"
                  className="input"
                ></input>
                <br />
                <button className="btn">Next</button>
              </div>
            </div>
          </div>
        </section>
        <section className="featured-profile-section">
          <div className="container">
            <h2>Hire proffessional workers</h2>
            <div className="featured-profile-container">
              {users.map((user) => (
                <div className="featured-profile">
                  <img src={user.imageUrl} />
                  <h4>{user.name}</h4>
                  <h5>{user.occupation}</h5>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="featured-job-section">
          <div className="container">
            <h2>Featured Job Posts</h2>
            <div className="feature-job-container">
              {jobs.map((job) => (
                <div className="featured-job">
                  <img src={job.imageUrl}></img>
                  <h5>{job.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="how-it-works-section">
          <div className="container">
            <h2>How does it work?</h2>
            <h5>
              <b>For Job seeker</b>
            </h5>
            <div className="how-it-works-container">
              {howItWorks.jobSeeker.map((step) => (
                <div className="how-it-work">
                  <img src={step.imageUrl}></img>
                  <h5>{step.title}</h5>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
            <h5>
              <b>For Employer</b>
            </h5>
            <div className="how-it-works-container">
              {howItWorks.employer.map((step) => (
                <div className="how-it-work">
                  <img src={step.imageUrl}></img>
                  <h5>{step.title}</h5>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Homeform />
      </div>
    );
  }
}
