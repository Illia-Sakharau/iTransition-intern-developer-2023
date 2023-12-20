import { FC, useEffect, useRef } from "react";
import { Form, Stack } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { personsParams } from "../../../store/reducers/personsParams";
import useDebounce from "../../../hooks/useDebounce";
import { persons } from "../../../store/reducers/persons";

const ErrorsInput: FC = () => {
  const errorInput = useRef<HTMLInputElement>();
  const { errNum } = useAppSelector( state => state.personsParams );
  const dispatch = useAppDispatch();
  const { setErrNum } = personsParams.actions;
  const { cleanList } = persons.actions;

  const changeHandler = useDebounce<React.ChangeEvent<HTMLInputElement>>((e) => {
    let value = +e.target.value;
    if (value < 0 || isNaN(value)) {
      value = 0;
    }
    if (value > 1000) {
      value = 1000;
    }
    dispatch(cleanList())
    dispatch(setErrNum(value))

  }, 500)

  useEffect(() => {
    if (errorInput.current) {
      errorInput.current.value = errNum.toString();
    }
  },[errNum])

  return (
    <Stack direction="horizontal" gap={2}>
      <Form.Label className="text-white" htmlFor="seed">Errors:</Form.Label>
      <Form.Control
        ref={errorInput as React.RefObject<HTMLInputElement>}
        
        id="seed"
        type="number"
        min={0}
        max={1000}
        defaultValue={errNum}
        onChange={changeHandler}
      />
    </Stack>
  );
};

export default ErrorsInput;
