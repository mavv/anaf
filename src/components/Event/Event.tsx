import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Button from '../Button';
import Popup from '../Popup';

interface CityProps {
  name: string;
}

interface EventProps {
  id: string;
  isFree: boolean;
  name: string;
  city: CityProps;
  startDate: string;
  endDate: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  padding: ${props => props.theme.spacing(4)};
  position: relative;
`;

// & :after {
//   content: '';
//   position: absolute;
//   bottom: 0;
//   left: 5%;
//   width: 90%;
//   height: 1px;
//   border-bottom: 1px solid ${props => props.theme.colors.darkGrey};
// }

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${props => props.theme.spacing(3)};
  flex: 1;
  > div {
    display: flex;
    flex-direction: row;
    :first-of-type {
      > div {
        &:first-of-type {
          flex: 1;
        }
        &:nth-of-type(2) {
          flex: 0;
        }
      }
    }
  }
`;

const LocationAndDuration = styled.div`
  color: ${props => props.theme.colors.lightGrey};
`;

const Title = styled.div`
  color: ${props => props.theme.colors.darkGrey};
  font-weight: 500;
`;
const IsFree = styled.div`
  color: ${props => props.theme.colors.darkGreen};
  font-weight: 500;
`;

const Event: React.FC<{ event: EventProps }> = ({ event }) => {
  const [open, setOpen] = useState(false);
  const { startDate, endDate, name, isFree, city } = event;
  const togglePopup = () => {
    setOpen(!open);
  };

  return (
    <>
      <Container>
        <div>{moment(startDate).format('HH:mm')}</div>
        <EventInfo>
          <div>
            <Title>{name}</Title>
            {isFree && <IsFree>Free!!!</IsFree>}
          </div>
          <div>
            <LocationAndDuration>{`${city.name} - ${moment(endDate).diff(
              startDate,
              'hours'
            )}h`}</LocationAndDuration>
          </div>
        </EventInfo>
        <Button onClick={togglePopup}>Sign Up</Button>
      </Container>
      <Popup open={open} togglePopup={togglePopup} title="Join the event">
        <p>{`You're about to sing up for ${name}. This event takes place the ${moment(
          startDate
        ).format('Do MMMM')} in ${city.name}.`}</p>
        <p>Are you sure?</p>
      </Popup>
    </>
  );
};

export default Event;
