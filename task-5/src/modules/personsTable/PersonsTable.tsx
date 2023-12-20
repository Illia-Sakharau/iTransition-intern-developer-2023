import { FC } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import { useGetPersonsQuery } from "../../API/PersonsAPI";
import { useAppSelector } from "../../hooks/redux";
import ErrorBlock from "./components/ErrorBlock";
import TableHeader from "./components/TableHeader";
import TableRaw from "./components/TableRaw";


const PersonsTable: FC = () => {
  const { list } = useAppSelector( state => state.persons );
  const params = useAppSelector( state => state.personsParams );
  const {isFetching, refetch, isError} = useGetPersonsQuery(params);

  return (
    <Container>
      <Table size="md" responsive striped hover>
        <TableHeader />
        <tbody>
          {list?.map((person) => {
            return <TableRaw key={person.index} personInfo={person}/>
          })}
        </tbody>
      </Table>
      {isFetching && <Spinner animation="border" variant="info" className="d-block mx-auto"/>}
      <ErrorBlock isError={isError} refetch={refetch} />
    </Container>
  );
};

export default PersonsTable;
