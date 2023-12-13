import { FC, ReactElement, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Input from './1-atom/input/Input';

type Props = {
  handleSubmit: (props: {email: string; password: string})=> void;
};

const LoginForm: FC<Props> = ({ handleSubmit }): ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    handleSubmit({
      email: email,
      password: password
    })
  }

  return (
    <>
      <h1 className='my-4'>Login</h1>
      <Form>
        <Input
          label={'Email address'}
          type={'text'}
          placeholder={'Enter email'} 
          value={email} 
          setValue={setEmail}        />
        <Input
          label={'Password'}
          type={'password'} 
          placeholder={'Enter password'}
          value={password} 
          setValue={setPassword}  
        />

        <Button 
          className='mt-3 w-100' 
          variant="primary"
          type="submit" 
          onClick={handleClick}
        >
          Login
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
