import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { groupBy, map } from 'lodash';
import moment from 'moment';

import Days from '../../components/Days';
import logo from '../../logo.svg';

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

const AllEvents: React.FC = props => {
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
  console.log(grouped);
  return (
    <>
      {map(grouped, (dayOfEvents: TechEvent[], i: number) => (
        <Days key={i} dayOfEvents={dayOfEvents} />
      ))}
    </>
  );
};

export default AllEvents;
