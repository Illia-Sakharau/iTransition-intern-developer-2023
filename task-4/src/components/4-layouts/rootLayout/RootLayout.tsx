import { FC, ReactElement, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../3-organism/Header';
import classes from "./style.module.scss";
import PageLoader from '../../1-atom/pageLoader/PageLoader';
import { useCheckUserQuery } from '../../../API/AuthAPI';
import { useAppDispatch } from '../../../hooks/redux';
import {currentUserSlice} from '../../../store/reducers/currentUserSlice';

type Props = unknown;

const RootLayout: FC<Props> = (): ReactElement => {
  const dispath = useAppDispatch();
  const { setCurentUser } = currentUserSlice.actions;
  const { data, isLoading } = useCheckUserQuery();
  
  useEffect(()=>{    
    if (data) {
      dispath(setCurentUser({
        name: data.user.username,
        email: data.user.email,
        token: data.token,
      }))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data])
  return (
    <>
      {
        isLoading 
        ?
        <PageLoader />
        :
        <>
          <Header />
          <main className={classes.main}>
            <Outlet />
          </main>
        </>
      }
    </>
  );
};

export default RootLayout;
