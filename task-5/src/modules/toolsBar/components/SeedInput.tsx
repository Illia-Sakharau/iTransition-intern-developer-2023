import { FC } from "react";
import { Form, Stack } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { personsParams } from "../../../store/reducers/personsParams";
import useDebounce from "../../../hooks/useDebounce";

const SeedInput: FC = () => {
  const { seed } = useAppSelector( state => state.personsParams );
  const dispatch = useAppDispatch();
  const { setSeed } = personsParams.actions;

  const changeHandler = useDebounce<React.ChangeEvent<HTMLInputElement>>((e) => {
    let value = +e.target.value;
    if (value < 0 || isNaN(value)) {
      value = 0;
      e.target.value = '0'
    }
    console.log(value);
    dispatch(setSeed(value))
  }, 500)


  return (
    <Stack direction="horizontal" gap={2}>
      <Form.Label className="text-white" htmlFor="seed">Seed:</Form.Label>
      <Form.Control
        id="seed"
        type="number"
        min={0}
        defaultValue={seed}
        onChange={changeHandler}
      />
    </Stack>
  );
};

export default SeedInput;
