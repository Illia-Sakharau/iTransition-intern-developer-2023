import { FC, ReactElement } from 'react';
import { Form } from 'react-bootstrap';

type Props = {
  label: string;
  type: 'text' | 'email' | 'password';
  placeholder: string;
  errorMessage?: string;
  value: string;
  setValue: (value: string)=>void;
};

const Input: FC<Props> = ({ type, placeholder, label, errorMessage, value, setValue }): ReactElement => {
  const controlId = label.replaceAll(' ','')
  return (
    <Form.Group className="mb-0" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control 
        type={type} 
        placeholder={placeholder}
        isInvalid = {!!errorMessage}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Form.Text className="text-danger">{errorMessage ? errorMessage : 'ㅤ'}</Form.Text>
    </Form.Group>
  );
};

export default Input;
