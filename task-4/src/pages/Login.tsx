import MyForm from '../components/Form';
import { FC, ReactElement } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux';
import { currentUserSlice } from '../store/reducers/currentUserSlice';
import { NavRoutes } from '../types/routes';
import { useAuth } from '../hooks/useAuth';

type Props = unknown;

const Login: FC<Props> = (): ReactElement => {
  const {isAuth} = useAuth();
  const navigate = useNavigate();
  const dispath = useAppDispatch();
  const { setCurentUser } = currentUserSlice.actions;
  
  const handleLogin = (email: string, password: string) => {
    dispath(setCurentUser({
      email: email,
      token: password,
    }))
    navigate(NavRoutes.users)
  }

  return (
    <>
      {isAuth && <Navigate to={NavRoutes.users} replace={true} />}
      <MyForm handleSubmit={handleLogin} />
    </>
  );
};

export default Login;
