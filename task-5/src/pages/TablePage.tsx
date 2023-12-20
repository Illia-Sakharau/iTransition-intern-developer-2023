import { FC } from "react";
import ToolsBar from "../modules/toolsBar/ToolsBar";
import PersonsTable from "../modules/personsTable/PersonsTable";

const TablePage: FC = () => {
  return (
    <>
      <ToolsBar />
      <PersonsTable />
    </>
  );
};

export default TablePage;
