import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { groupBy, map } from 'lodash';
import moment from 'moment';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Days from './components/Days';
import Layout from './components/Layout';
import AllEvents from './pages/AllEvents';
import MyEvents from './pages/MyEvents';

const eventsQuery = gql`
  {
    events {
      id
      isFree
      name
      city {
        name
      }
      startDate
      endDate
    }
  }
`;

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

const monthName = (item: TechEvent) =>
  moment(item.startDate).format('Do MMM YYYY');

const App: React.FC = () => {
  const { loading, error, data } = useQuery(eventsQuery);

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>ERROR</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            You should investigate!
          </a>
        </header>
      </div>
    );
  const grouped = groupBy(data.events, monthName);
  return (
    <Router>
      <Layout>
        <Route path="/" exact component={AllEvents} />
        <Route path="/my-events" component={MyEvents} />
      </Layout>
    </Router>
  );
};

export default App;
