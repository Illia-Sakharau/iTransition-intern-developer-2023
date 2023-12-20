import { FC } from "react";
import { useGetPersonsQuery } from "../API/PersonsAPI";
import { Button } from "react-bootstrap";

const TablePage: FC = () => {
  const {data, isLoading, refetch} = useGetPersonsQuery({
    seed: 123,
    page: 1,
    size: 1,
    ln: 'ge',
    errNum: 2,
  });

  return (
    <>
      <h1>TABLE</h1>
      <Button onClick={refetch}>123</Button>
    </>
  );
};

export default TablePage;
