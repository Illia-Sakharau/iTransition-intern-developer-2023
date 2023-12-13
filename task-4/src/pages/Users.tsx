import { Navigate } from 'react-router-dom';
import { FC, ReactElement } from 'react';
import { NavRoutes } from '../types/routes';
import { useAuth } from '../hooks/useAuth';
import UserTable from '../components/3-organism/UserTable';

type Props = unknown;

const Users: FC<Props> = (): ReactElement => {
  const {isAuth} = useAuth();

  
  return (
    <>
      {!isAuth && <Navigate to={NavRoutes.login} replace={true} />}
      <UserTable />
    </>    
  );
};

export default Users;
