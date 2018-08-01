import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../../api/tasks.js'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import NotFound from '../pages/NotFound.jsx';
import Post from '../pages/Post.jsx';
import Recruit from '../pages/Recruit.jsx';
import Help from '../pages/Help.jsx';
import Homepage from '../pages/Homepage.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import PersonalInfo from '../pages/dashboard/PersonalInfo.jsx';
import ContactInfo from '../pages/dashboard/ContactInfo.jsx';
import WorkExperience from '../pages/dashboard/WorkExperience.jsx';
import LanguageDetails from '../pages/dashboard/LanguageDetails.jsx';
import Academic from '../pages/dashboard/Academic.jsx';
import SocialActivities from '../pages/dashboard/SocialActivities.jsx';
import EducationInfo from '../pages/dashboard/EducationInfo.jsx';
import FamilyInfo from '../pages/dashboard/FamilyInfo.jsx';
import Profile from '../pages/Profile.jsx';


export default class MainLayout extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path = '/about' component={About} />
              <Route exact path = '/help' component={Help} />
              <Route exact path = '/post' component={Post} />
              <Route exact path = '/recruit' component={Recruit} />
              <Route exact path = '/recruit/profile' component={Profile} />
              <Route exact path = '/home' component={Homepage} />
              <Route exact path = '/dashboard' component={Dashboard} />
              <Route exact path='/dashboard/personalinfo' component={PersonalInfo} />
              <Route exact path = '/dashboard/familyinfo' component={FamilyInfo} />
              <Route exact path = '/dashboard/contactinfo' component={ContactInfo} />
              <Route exact path = '/dashboard/educationinfo' component={EducationInfo} />
              <Route exact path = '/dashboard/languagedetails' component={LanguageDetails} />
              <Route exact path = '/dashboard/workexperience' component={WorkExperience} />
              <Route exact path = '/dashboard/academic' component={Academic} />
              <Route exact path = '/dashboard/socialactivities' component={SocialActivities} />
              <Route component={NotFound} />
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
