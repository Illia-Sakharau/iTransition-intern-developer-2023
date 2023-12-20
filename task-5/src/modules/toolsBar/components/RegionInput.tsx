import { FC } from "react";
import { Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { personsParams } from "../../../store/reducers/personsParams";
import { Region } from "../../../types/persons";

const RegionInput: FC = () => {
  const { ln } = useAppSelector( state => state.personsParams );
  const dispatch = useAppDispatch();
  const { setRegion } = personsParams.actions;

  const changeHandler: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    dispatch(setRegion(e.target.value as Region))
  }

  return (
    <>
      <Form.Label className="text-white" htmlFor="region">Region:</Form.Label>
      <Form.Select 
        id="region"
        aria-label="Default select example"
        onChange={changeHandler}
        value={ln}
      >
        <option value="en">USA</option>
        <option value="ru">Russia</option>
        <option value="ge">Georgia</option>
      </Form.Select>
    </>
  );
};

export default RegionInput;
