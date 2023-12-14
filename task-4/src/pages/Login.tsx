import { FC, ReactElement } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux';
import { currentUserSlice } from '../store/reducers/currentUserSlice';
import { NavRoutes } from '../types/routes';
import { useAuth } from '../hooks/useAuth';
import LoginForm from '../components/3-organism/LoginForm';
import { useLoginUserMutation } from '../API/AuthAPI';
import { AuthResp } from '../types/users';

const Login: FC = (): ReactElement => {
  const {isAuth} = useAuth();
  const navigate = useNavigate();
  const dispath = useAppDispatch();
  const { setCurentUser } = currentUserSlice.actions;
  const [loginUser, {isLoading}]  = useLoginUserMutation();
  
  const handleLogin =  (props: {email: string; password: string}) => {
    loginUser(props)
      .then((resp)=> {
        const data = (resp as AuthResp).data;
        console.log(data)
        localStorage.setItem('token', data.token)
        dispath(setCurentUser({
          email: data.user.email,
          token: data.token,
        }))
        navigate(NavRoutes.users)
      })
      .catch(error => console.log(error))
  }

  return (
    <>
      {isAuth && <Navigate to={NavRoutes.users} replace={true} />}
      <LoginForm
        handleSubmit={handleLogin}
        isLoading={isLoading}
      />
    </>
  );
};

export default Login;
