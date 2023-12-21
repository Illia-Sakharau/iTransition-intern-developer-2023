import { FC, useEffect, useRef } from "react";
import { Form, Stack } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { personsParams } from "../../../store/reducers/personsParams";
import useDebounce from "../../../hooks/useDebounce";
import RandomSeedBtn from "./RandomSeedBtn";
import useCleanPersonList from "../../../hooks/useCleanPersonList";

const SeedInput: FC = () => {
  const input = useRef<HTMLInputElement>();
  const { seed } = useAppSelector( state => state.personsParams );
  const dispatch = useAppDispatch();
  const { setSeed } = personsParams.actions;
  const cleanPersonList = useCleanPersonList();

  const changeHandler = useDebounce<React.ChangeEvent<HTMLInputElement>>((e) => {
    let value = +e.target.value;
    if (value < 0 || isNaN(value)) value = 0;
    cleanPersonList();
    dispatch(setSeed(value));
  }, 500)

  useEffect(() => {
    if (input.current) {
      input.current.value = seed.toString();
    }
  },[seed])

  return (
    <Stack direction="horizontal" gap={2}>
      <Form.Label className="text-white" htmlFor="seed">Seed:</Form.Label>
      <Form.Control
        ref={input as React.RefObject<HTMLInputElement>}
        
        id="seed"
        type="number"
        min={0}
        defaultValue={seed}
        onChange={changeHandler}
      />
      <RandomSeedBtn />
    </Stack>
  );
};

export default SeedInput;
