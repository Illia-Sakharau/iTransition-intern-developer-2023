import React from 'react'
import { SpaceCard } from '../components/spaceCard'

const SPACES_LIST = ['1', '2', '3']

export const MainPage = () => (
  <>
    {SPACES_LIST.map((space)=> <SpaceCard key={space} space={space} />)}
  </>
);
