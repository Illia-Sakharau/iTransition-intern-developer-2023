import { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Props = unknown;

const RootLayout: FC<Props> = (): ReactElement => {
  return (
    <>
      <style type="text/css">
        {`
          .h-100vh {
            min-height: calc(100vh - 112px);
          }
        `}
      </style>

      <Header />
      <main className='h-100vh'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
