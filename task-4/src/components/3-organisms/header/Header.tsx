import { Link } from 'react-router-dom';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import { NavRoutes } from '../../../types/routes';

type Props = unknown;

const Header: FC<Props> = (): ReactElement => {
  return (
    <header className={classes.header}>
      <Link to={NavRoutes.users}>Users</Link>
      <Link to={NavRoutes.login}>Login</Link>
      <Link to={NavRoutes.registration}>Registration</Link>
    </header>
  );
};

export default Header;
