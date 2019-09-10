import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
`;

const MenuItem = styled.li`
  margin-left: ${props => props.theme.spacing(3)};
`;

const NiceLink = styled(NavLink)`
  color: ${props => props.theme.colors.lightGrey};
  cursor: pointer;
  text-decoration: none;

  &.active {
    color: ${props => props.theme.colors.darkBlue};
  }
  &:hover {
    color: ${props => props.theme.colors.darkBlue};
    font-weight: 500;
  }
`;

const Menu: React.FC = props => (
  <MenuList>
    <MenuItem>
      <NiceLink to="/" exact>
        All Events
      </NiceLink>
    </MenuItem>
    <MenuItem>
      <NiceLink to="/my-events">My Events</NiceLink>
    </MenuItem>
  </MenuList>
);

export default Menu;
