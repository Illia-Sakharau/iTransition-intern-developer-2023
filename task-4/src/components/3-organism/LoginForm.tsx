import { FC, ReactElement, useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
import Input from '../1-atom/input/Input';
import RectButton from '../1-atom/button/RectButton';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { RespError } from '../../types/errors';
import { DEFAULT_ERROR_TEXT } from '../../constants';

type Props = {
  handleSubmit: (props: {email: string; password: string})=> void;
  isLoading: boolean;
  error?: FetchBaseQueryError | SerializedError;
};

const LoginForm: FC<Props> = ({ handleSubmit, isLoading, error }): ReactElement => {
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
          type={'email'}
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
        {error && <Alert variant='danger' dismissible>{(error as RespError).data.message || DEFAULT_ERROR_TEXT}</Alert>}
        <RectButton 
          className='my-3 w-100' 
          variant="primary"
          type="submit" 
          onClick={handleClick}
          isLoading={isLoading}
        >
          Login
        </RectButton>
      </Form>
    </>
  );
};

export default LoginForm;
