import React from 'react';
import styled from 'styled-components';

import Menu from '../Menu';

const Container = styled.div`
  background-color: white;
  height: 65px;
  box-shadow: 0 0.5px 3px ${props => props.theme.colors.darkGrey};
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 99;
`;

const Logo = styled.div`
  margin-left: ${props => props.theme.spacing(3)};

  > span {
    &:nth-of-type(2) {
      font-size: 24px;
    }
  }
`;

const Header: React.FC = props => (
  <Container>
    <Logo>
      <span>my</span>
      <span>logo</span>
    </Logo>
    <Menu />
  </Container>
);

export default Header;
