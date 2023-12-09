import { Navigate } from 'react-router-dom';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import { NavRoutes } from '../../types/routes';
import { useAuth } from '../../hooks/useAuth';

type Props = unknown;

const Users: FC<Props> = (): ReactElement => {
  const {isAuth} = useAuth();

  
  return (
    <>
      {!isAuth && <Navigate to={NavRoutes.login} replace={true} />}
      <main className={classes.page}>
        <h1>Users Page</h1>
      </main>
    </>    
  );
};

export default Users;
