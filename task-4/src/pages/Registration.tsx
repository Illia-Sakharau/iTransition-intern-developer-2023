import { FC, ReactElement } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { currentUserSlice } from '../store/reducers/currentUserSlice';
import { Navigate, useNavigate } from 'react-router-dom'
import { NavRoutes } from '../types/routes';
import { useAuth } from '../hooks/useAuth';
import RegistrationForm from '../components/3-organism/RegistrationForm';
import { useCreateUserMutation } from '../API/AuthAPI';
import { AuthResp, RegistrationReqBody } from '../types/users';

type Props = unknown;

const Registration: FC<Props> = (): ReactElement => {
  const {isAuth} = useAuth();
  const navigate = useNavigate();
  const dispath = useAppDispatch();
  const { setCurentUser } = currentUserSlice.actions;
  const [createUser, {isLoading}] = useCreateUserMutation()
  
  const handleRegistration = async (props: RegistrationReqBody) => {
    createUser(props)
      .then((resp)=> {
        const data = (resp as AuthResp).data;
        localStorage.setItem('token', data.token)
        dispath(setCurentUser({
          name: data.user.username,
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
      <RegistrationForm 
        handleSubmit={handleRegistration}
        isLoading={isLoading}
      />
    </>
  );
};

export default Registration;
