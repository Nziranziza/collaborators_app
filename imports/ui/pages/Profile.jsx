import React from "react";
import { Redirect } from "react-router-dom";
import PaymentForm from "../components/PaymentForm.jsx";
import users from "../../../__mocks__/user";

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      viewcard: false,
      redirect: false,
      profile: null,
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { username },
      },
    } = this.props;
    this.setState({
      profile: users.find((user) => user.userName === username),
    });
  }
  changeCardView(e) {
    e.preventDefault();
    this.setState({
      viewcard: !this.state.viewcard,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 center page-title-box">
            <p
              className="h1 text-center mb-4"
              style={{ paddingBottom: "10px" }}
            >{`${this.state.profile && this.state.profile.name}'s profile`}</p>
          </div>
        </div>
        <div className="row margin-bottom-100">
          <div className="col-md-3">
            <img
              src={this.state.profile && `../${this.state.profile.imageUrl}`}
              width="100"
              height="100"
              className="img-circle"
            />
            <h3>Nickname</h3>
             <p>{this.state.profile && this.state.profile.nickname}</p>
            <h3>Resume</h3>
            <p>
              <a href="#">
                PDF
              </a>
            </p>
          </div>
          <div className="col-md-6">
            <h3>Home</h3>
             <p>{this.state.profile && this.state.profile.address}</p>
            <h3>Bio</h3>
            <p>
              {this.state.profile && this.state.profile.biography}
            </p>
            <h3>Skills</h3>
            <ul>
              {this.state.profile && this.state.profile.skills.map(skill => (
                <li>{skill}</li>
              ))}
            </ul>
            <h3>Experience</h3>
            <ul>
              {
                this.state.profile && this.state.profile.experiences.map(experience => (
                <li>{experience}</li>
                ))
              }
            </ul>
          </div>
          <div className="col-md-3">
            <h3>{this.state.profile && this.state.profile.occupation}</h3>
            <button
              type="button"
              className="btn btn-raised btn-primary"
              onClick={this.changeCardView.bind(this)}
            >
              Hire
            </button>
            {this.state.viewcard ? <PaymentForm /> : ""}
            {this.state.redirect ? (
              <Redirect to={{ pathname: "/recruit" }} />
            ) : (
                ""
              )}
          </div>
        </div>
      </div>
    );
  }
}
