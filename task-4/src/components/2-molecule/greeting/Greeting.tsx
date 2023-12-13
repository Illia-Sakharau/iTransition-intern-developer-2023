import classes from "./style.module.scss";
import { FC, ReactElement } from 'react';

type Props = {
  name: string;
};

const Greeting: FC<Props> = ({ name }): ReactElement => {
  
  return (
    <div className={classes.container}>
      <p>Hello,&nbsp;</p>
      <p>{name}</p>
      <p>{'!'}</p>
    </div>
  );
};

export default Greeting;
