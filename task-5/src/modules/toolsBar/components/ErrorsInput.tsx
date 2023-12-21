import { FC, useEffect, useRef } from "react";
import { Form, Stack } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { personsParams } from "../../../store/reducers/personsParams";
import useDebounce from "../../../hooks/useDebounce";
import useCleanPersonList from "../../../hooks/useCleanPersonList";

const ErrorsInput: FC = () => {
  const errorInput = useRef<HTMLInputElement>();
  const errorRange = useRef<HTMLInputElement>();
  const { errNum } = useAppSelector( state => state.personsParams );
  const dispatch = useAppDispatch();
  const { setErrNum } = personsParams.actions;
  const cleanPersonList = useCleanPersonList();

  const changeHandler = useDebounce<React.ChangeEvent<HTMLInputElement>>((e) => {
    let value = +e.target.value;
    if (value < 0 || isNaN(value)) {
      value = 0;
    }
    if (value > 1000) {
      value = 1000;
    }
    cleanPersonList();
    dispatch(setErrNum(value))

  }, 500)

  useEffect(() => {
    if (errorInput.current && errorRange.current) {
      errorInput.current.value = errNum.toString();
      errorRange.current.value = errNum.toString()
    }
  },[errNum])

  return (
    <Stack direction="horizontal" gap={2}>
      <Form.Label className="text-white" htmlFor="seed">Errors:</Form.Label>
      <Form.Range 
        ref={errorRange as React.RefObject<HTMLInputElement>}
        min={0}
        max={10}
        step={0.25}
        defaultValue={errNum}
        onChange={changeHandler}
      />
      <Form.Control
        ref={errorInput as React.RefObject<HTMLInputElement>}
        id="seed"
        type="number"
        min={0}
        max={1000}
        step={0.25}
        defaultValue={errNum}
        onChange={changeHandler}
      />
    </Stack>
  );
};

export default ErrorsInput;
