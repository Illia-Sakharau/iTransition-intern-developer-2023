import { Outlet } from 'react-router-dom';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = unknown;

const Auth: FC<Props> = (): ReactElement => {
  
  return (
    <main className={classes.layout}>
      <Outlet />
    </main>
  );
};

export default Auth;
