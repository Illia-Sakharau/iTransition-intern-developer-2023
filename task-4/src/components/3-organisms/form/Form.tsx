import classes from './style.module.scss';
import { FC, ReactElement, useState } from 'react';

type Props = {
  handleSubmit: (email: string, password: string)=> void;
};

const Form: FC<Props> = ({ handleSubmit }): ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={classes.form}>
      <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        placeholder='Type email'
      />
      <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        placeholder='Type password'
      />
      <button onClick={() => handleSubmit(email, password)}>
        Submit
      </button>
    </div>
  );
};

export default Form;
