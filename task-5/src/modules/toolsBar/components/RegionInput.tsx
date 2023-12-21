import { FC } from "react";
import { Form, Stack } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { personsParams } from "../../../store/reducers/personsParams";
import { Region } from "../../../types/persons";
import useCleanPersonList from "../../../hooks/useCleanPersonList";

const RegionInput: FC = () => {
  const { ln } = useAppSelector( state => state.personsParams );
  const dispatch = useAppDispatch();
  const { setRegion } = personsParams.actions;
  const cleanPersonList = useCleanPersonList();

  const changeHandler: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    cleanPersonList();
    dispatch(setRegion(e.target.value as Region))
  }

  return (
    <Stack direction="horizontal" gap={2}>
      <Form.Label className="text-white" htmlFor="region">Region:</Form.Label>
      <Form.Select 
        id="region"
        onChange={changeHandler}
        value={ln}
      >
        <option value="en">USA</option>
        <option value="ru">Russia</option>
        <option value="ge">Georgia</option>
      </Form.Select>
    </Stack>
  );
};

export default RegionInput;
