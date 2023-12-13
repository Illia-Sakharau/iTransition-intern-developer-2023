import { FC, ReactElement } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { currentUserSlice } from '../store/reducers/currentUserSlice';
import { Navigate, useNavigate } from 'react-router-dom'
import { NavRoutes } from '../types/routes';
import { useAuth } from '../hooks/useAuth';
import RegistrationForm from '../components/3-organism/RegistrationForm';

type Props = unknown;

const Registration: FC<Props> = (): ReactElement => {
  const {isAuth} = useAuth();
  const navigate = useNavigate();
  const dispath = useAppDispatch();
  const { setCurentUser } = currentUserSlice.actions;
  
  const handleRegistration = (props:{name: string, position: string, email: string, password: string}) => {
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
      <RegistrationForm handleSubmit={handleRegistration} />
    </>
  );
};

export default Registration;
