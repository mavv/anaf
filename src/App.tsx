import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Days from './components/Days';
import Layout from './components/Layout';
import AllEvents from './pages/AllEvents';
import MyEvents from './pages/MyEvents';

interface CityProps {
  id: string;
  name: string;
}

export interface TechEvent {
  id: string;
  name: string;
  isFree: boolean;
  startDate: string;
  endDate: string;
  city: CityProps;
}

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={AllEvents} />
          <Route path="/my-events" component={MyEvents} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
