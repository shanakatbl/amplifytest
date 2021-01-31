import React from 'react';
import logo from './logo.svg'
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './layout/layout';
import Dashboard from './views/Dashboard/Dashboard';
import UserSettings from './views/Subscriber/userSettings';
import Billing from './views/Subscribe/Billing';
import ExtractedData from './views/Incidents/ExtractedData';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/userSettings" component={UserSettings} />
        <Route path="/billing" component={Billing} />
        <Route path="/extractedData" component={ExtractedData} />
        <Redirect from="/" to="/dashboard" />
        <AmplifySignOut />
      </Switch>
    </Layout>
  
    
  );
}

export default withAuthenticator(App);
