import { FC, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useAppSelector } from "../../../hooks/redux";
import downloadCSV from "../../../utils/downloadCSV";


const ExportButton: FC = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const queries = useAppSelector( state => state.personsParams );

  const exportHandle = async () => {
    setIsLoading(true);
    await downloadCSV(queries);
    setIsLoading(false);
  }

  return (
    <Button
      variant="primary"
      className="ms-auto"
      onClick={exportHandle}
      disabled={isLoading}
    >
      {isLoading 
        ? <>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </> 
        : <>Export</>
      }
    </Button>
  );
};

export default ExportButton;
