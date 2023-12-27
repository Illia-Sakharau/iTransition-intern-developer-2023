import { NavLink } from 'react-router-dom';
import classes from './style.module.css'

export const SpaceCard = ({ space }) => {

  return (
    <>
      <NavLink className={classes.item} to={`/${space}`}>{space}</NavLink>
    </>
  )
}
