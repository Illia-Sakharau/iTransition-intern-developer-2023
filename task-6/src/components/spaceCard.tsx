import React from 'react'
import { NavLink } from 'react-router-dom';

export const SpaceCard = ({space}) => (
  <>
    <NavLink to={`/${space}`}>{space}</NavLink>
  </>
);
