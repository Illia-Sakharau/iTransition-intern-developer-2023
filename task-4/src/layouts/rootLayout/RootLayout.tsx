import { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/3-organism/Header';
import classes from "./style.module.scss";

type Props = unknown;

const RootLayout: FC<Props> = (): ReactElement => {
  return (
    <>
      <style type="text/css">
        {`
          .h-100vh {
            min-height: calc(100vh - 56px);
          }
        `}
      </style>

      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
