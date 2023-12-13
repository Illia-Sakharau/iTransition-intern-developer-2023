import { Outlet } from 'react-router-dom';
import { FC, ReactElement } from 'react';

type Props = unknown;

const Auth: FC<Props> = (): ReactElement => {
  
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default Auth;
