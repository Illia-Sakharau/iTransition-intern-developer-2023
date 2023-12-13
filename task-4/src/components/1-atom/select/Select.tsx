import { ChangeEventHandler, FC, ReactElement } from 'react';
import { Form } from 'react-bootstrap';

type Props = {
  label: string;
  titleOptions?: string;
  errorMessage?: string;
  options: {
    value: string;
    text: string;
  }[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const Select: FC<Props> = ({ value, titleOptions, options, label, errorMessage, setValue }): ReactElement => {
  const controlId = label.replaceAll(' ','')

  const changeValue: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const currentValue = event.target.value;
    setValue(currentValue)
  }
  return (
    <Form.Group className="mb-0" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Select value={value} onChange={changeValue}>
        {titleOptions && <option disabled>{titleOptions}</option>}
        {options.map((option) => <option key={option.value} value={option.value}>{option.text}</option>)}
      </Form.Select>
      <Form.Text className="text-danger">{errorMessage ? errorMessage : 'ㅤ'}</Form.Text>
    </Form.Group>
  );
};

export default Select;
