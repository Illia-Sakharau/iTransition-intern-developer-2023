import { FC, ReactElement, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Input from '../1-atom/input/Input';
import Select from '../1-atom/select/Select';

const USER_POSITION = [
  {
    value: "CTO",
    text: "CTO"
  },
  {
    value: "FE",
    text: "FE developer"
  },
  {
    value: "BE",
    text: "BE developer"
  },
]

type Props = {
  handleSubmit: (props:{name: string, position: string, email: string, password: string})=> void;
};

const RegistrationForm: FC<Props> = ({ handleSubmit }): ReactElement => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState(USER_POSITION[0].value);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    handleSubmit({
      name,
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

        <Button 
          className='my-3 w-100' 
          variant="primary"
          type="submit" 
          onClick={handleClick}
        >
          Regstration
        </Button>
      </Form>
    </>
  );
};

export default RegistrationForm;
