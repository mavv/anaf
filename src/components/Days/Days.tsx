import React from 'react';
import styled from 'styled-components';
import { TechEvent } from '../../App';
import Event from '../Event';
import moment from 'moment';

const Day = styled.div`
  color: ${props => props.theme.colors.darkGrey};
  margin-bottom: ${props => props.theme.spacing(4)};
  font-weight: 500;
`;

const TechEventList = styled.div`
  border: 1px solid ${props => props.theme.colors.darkGrey};
  margin-bottom: ${props => props.theme.spacing(4)};
`;

interface Props {
  dayOfEvents: TechEvent[];
}

const Days: React.FC<Props> = ({ dayOfEvents }) => {
  return (
    <>
      <Day>{moment(dayOfEvents[0].startDate).format('dddd Do MMMM')}</Day>
      <TechEventList>
        {dayOfEvents.map((event: TechEvent, i: number) => (
          <Event key={i} event={event} />
        ))}
      </TechEventList>
    </>
  );
};

export default Days;
