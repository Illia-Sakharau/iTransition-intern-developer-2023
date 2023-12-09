import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = unknown;

const Registration: FC<Props> = (): ReactElement => {

  return (
    <main className={classes.page}>
      <h1>Registration Page</h1>
    </main>
  );
};

export default Registration;
