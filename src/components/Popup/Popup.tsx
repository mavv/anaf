import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import Button from '../Button';

interface Props {
  children: React.ReactNode;
  open: boolean;
  togglePopup: React.MouseEventHandler;
  title?: string;
}

const SAVE_EVENT = gql`
  mutation saveEvent($event: EventProps) {
    saveEvent(id: $event) @client
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.25);
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;

  width: 90vw;
  z-index: 1000;

  @media ${props => props.theme.device.laptop} {
    width: 70vw;
  }

  @media ${props => props.theme.device.laptopL} {
    width: 30vw;
  }
`;

const TitleBar = styled.div`
  display: flex;
  flex-direction-row;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
  padding: ${props => props.theme.spacing(2)};
  background-color: ${props => props.theme.colors.paleGrey};
`;

const Title = styled.div`
  flex: 1;
  text-align: center;
  font-weight: 500;
  color: ${props => props.theme.colors.lightGrey};
`;

const CloseButton = styled.div`
  flex: 0;
  font-weight: 700;
  font-size: 24px;
  color: ${props => props.theme.colors.lightGrey};
  cursor: pointer;

  &:hover,
  &:active {
    color: ${props => props.theme.colors.darkGrey};
  }
  z
`;

const Content = styled.div`
  padding: ${props => props.theme.spacing(9)} ${props => props.theme.spacing(7)};
  text-align: left;
`;
const ButtonBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(6)};

  > button:nth-of-type(2) {
    margin-left: ${props => props.theme.spacing(1)};
  }
`;

const Popup: React.FC<Props> = ({ children, togglePopup, open, title }) => {
  const saveEvent = () => {
    // togglePopup(e);
  };

  return open
    ? createPortal(
        <>
          <Backdrop role="button" onClick={togglePopup} />
          <Overlay>
            <TitleBar>
              <Title>
                <span>{title}</span>
              </Title>
              <CloseButton role="button" onClick={togglePopup}>
                &times;
              </CloseButton>
            </TitleBar>
            <Content>{children}</Content>

            <ButtonBar>
              <Button onClick={togglePopup}>Cancel</Button>
              <Button onClick={saveEvent}>Join</Button>
            </ButtonBar>
          </Overlay>
        </>,
        document.body
      )
    : null;
};

export default Popup;
