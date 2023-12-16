import { Navigate } from 'react-router-dom';
import { FC, ReactElement } from 'react';
import { NavRoutes } from '../types/routes';
import { useAuth } from '../hooks/useAuth';
import UserTable from '../components/3-organism/UserTable/UserTable';
import { useGetUsersQuery } from '../API/UserAPI';
import PageLoader from '../components/1-atom/pageLoader/PageLoader';
import BulkBar from '../components/3-organism/bulkBar/BulkBar';
import { useAppSelector } from '../hooks/redux';

type Props = unknown;

const Users: FC<Props> = (): ReactElement => {
  const {isAuth} = useAuth();
  useGetUsersQuery();
  const { isLoading, users } = useAppSelector(state=>state.usersSlice)
  
  return (
    <>
      {!isAuth && <Navigate to={NavRoutes.login} replace={true} />}
      {isLoading
        ? 
          <PageLoader />
        :
          <>
            <BulkBar />
            <UserTable usersList={users}/>
          </>
      }
    </>    
  );
};

export default Users;
