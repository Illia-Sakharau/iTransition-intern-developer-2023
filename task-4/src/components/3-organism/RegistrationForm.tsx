import { FC, ReactElement, useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
import Input from '../1-atom/input/Input';
import Select from '../1-atom/select/Select';
import { RegistrationReqBody } from '../../types/users';
import { DEFAULT_ERROR_TEXT, USER_POSITION } from '../../constants';
import RectButton from '../1-atom/button/RectButton';
import { RespError } from '../../types/errors';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

type Props = {
  handleSubmit: (props: RegistrationReqBody)=> void;
  isLoading: boolean;
  error?: FetchBaseQueryError | SerializedError;
};

const RegistrationForm: FC<Props> = ({ handleSubmit, isLoading, error }): ReactElement => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState(USER_POSITION[0].value);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    handleSubmit({
      username: name,
      position,
      email,
      password,
    })
  }

  return (
    <>
      <h1 className='my-4'>Registration</h1>
      <Form>
        <Input
          label={'Full name'}
          type={'text'}
          placeholder={'Enter your full name'} 
          value={name} 
          setValue={setName}
        />
        <Select 
          label={'Position'}
          setValue={setPosition}
          value={position}
          options={USER_POSITION}
          titleOptions='Positions'
        />
        <Input
          label={'Email address'}
          type={'email'}
          placeholder={'Enter your email'} 
          value={email} 
          setValue={setEmail}
        />
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
          Regstration
        </RectButton>
      </Form>
    </>
  );
};

export default RegistrationForm;
