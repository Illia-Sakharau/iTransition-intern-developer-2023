import { FC, ReactElement } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux';
import { currentUserSlice } from '../store/reducers/currentUserSlice';
import { NavRoutes } from '../types/routes';
import { useAuth } from '../hooks/useAuth';
import LoginForm from '../components/3-organism/LoginForm';

const Login: FC = (): ReactElement => {
  const {isAuth} = useAuth();
  const navigate = useNavigate();
  const dispath = useAppDispatch();
  const { setCurentUser } = currentUserSlice.actions;
  
  const handleLogin = (props: {email: string; password: string}) => {
    console.log(props);
    
    dispath(setCurentUser({
      email: props.email,
      token: props.password,
    }))
    navigate(NavRoutes.users)
  }

  return (
    <>
      {isAuth && <Navigate to={NavRoutes.users} replace={true} />}
      <LoginForm handleSubmit={handleLogin} />
    </>
  );
};

export default Login;
