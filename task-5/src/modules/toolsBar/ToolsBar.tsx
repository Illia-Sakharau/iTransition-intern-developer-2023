import { FC } from "react";
import { Button, Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {personsParams} from "../../store/reducers/personsParams";
import { useGetPersonsQuery } from "../../API/PersonsAPI";

const ToolsBar: FC = () => {
  const { page } = useAppSelector( state => state.personsParams );
  const dispatch = useAppDispatch();
  const { setPage } = personsParams.actions;

  const params = useAppSelector( state => state.personsParams );
  const {refetch} = useGetPersonsQuery(params);

  return (
    <Container>
      <h2>TOOLS_BAR</h2>
      <Button onClick={() => {
        dispatch(setPage(page + 1));
        refetch();
      }}>123</Button>
    </Container>
  );
};

export default ToolsBar;
