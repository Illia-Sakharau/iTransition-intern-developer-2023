import { persons } from "../store/reducers/persons";
import { personsParams } from "../store/reducers/personsParams";
import { useAppDispatch } from "./redux";

function useCleanPersonList() {
  const dispatch = useAppDispatch();
  const { cleanList } = persons.actions;
  const { setPage, setSize } = personsParams.actions;

  return (() => {
    dispatch(setPage(1))
    dispatch(setSize(20))
    dispatch(cleanList())
  })

}

export default useCleanPersonList;
