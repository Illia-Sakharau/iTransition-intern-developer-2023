import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = unknown;

const Login: FC<Props> = (): ReactElement => {

  return (
    <main className={classes.page}>
      <h1>Login Page</h1>
    </main>
  );
};

export default Login;
