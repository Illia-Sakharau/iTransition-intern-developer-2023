import { FC } from "react";
import { Button } from "react-bootstrap";
import { ArrowRepeat } from 'react-bootstrap-icons';
import { useAppDispatch } from "../../../hooks/redux";
import { personsParams } from "../../../store/reducers/personsParams";
import generateSeed from "../../../utils/generateSeed";
import { persons } from "../../../store/reducers/persons";

const RandomSeedBtn: FC = () => {
  const dispatch = useAppDispatch();
  const { setSeed } = personsParams.actions;
  const { cleanList } = persons.actions;
  
  const clickHandler = () => {
    const newSeed = generateSeed();
    dispatch(cleanList());
    dispatch(setSeed(newSeed));
  }

  return (
    <Button 
      variant="outline-light"
      className="p-1"
      onClick={clickHandler}
    >
      <ArrowRepeat size={'29px'}/>
    </Button>
  );
};

export default RandomSeedBtn;
