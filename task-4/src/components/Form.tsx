import { FC, ReactElement, useState } from 'react';
import { Button } from 'react-bootstrap';

type Props = {
  handleSubmit: (email: string, password: string)=> void;
};

const MyForm: FC<Props> = ({ handleSubmit }): ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
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
      <Button variant="primary" type="submit" onClick={() => handleSubmit(email, password)}>
        Submit
      </Button>
    </div>
  );
};

export default MyForm;
