import { Navigate } from 'react-router-dom';
import { FC, ReactElement } from 'react';
import { NavRoutes } from '../types/routes';
import { useAuth } from '../hooks/useAuth';
import UserTable from '../components/3-organism/UserTable';
import { useGetUsersQuery } from '../API/UserAPI';
import { Spinner } from 'react-bootstrap';

type Props = unknown;

const Users: FC<Props> = (): ReactElement => {
  const {isAuth} = useAuth();
  const { data, isLoading } = useGetUsersQuery();
  
  return (
    <>
      {!isAuth && <Navigate to={NavRoutes.login} replace={true} />}
      {isLoading
        ? 
        <>
          <Spinner animation="border" role="status" />
          <span>Loading...</span>
        </> 
        :
        <>
          <UserTable usersList={data}/>
        </>
      }
    </>    
  );
};

export default Users;
