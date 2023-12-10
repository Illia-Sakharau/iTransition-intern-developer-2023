import { Link, useNavigate } from 'react-router-dom';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import { NavRoutes } from '../../../types/routes';
import { useAppDispatch } from '../../../hooks/redux';
import { currentUserSlice } from '../../../store/reducers/currentUserSlice';
import { useAuth } from '../../../hooks/useAuth';

type Props = unknown;

const Header: FC<Props> = (): ReactElement => {
  const {isAuth} = useAuth();
  const navigate = useNavigate();
  const dispath = useAppDispatch();
  const { removeCurentUser } = currentUserSlice.actions;

  const handleSignOut = () => {
    dispath(removeCurentUser())
    navigate(NavRoutes.login)
  }

  return (
    <header className={classes.header}>
      <Link to={NavRoutes.users}>Users</Link>
      <Link to={NavRoutes.login}>Login</Link>
      <Link to={NavRoutes.registration}>Registration</Link>
      {isAuth && <button onClick={handleSignOut}>SignOut</button>}
    </header>
  );
};

export default Header;
