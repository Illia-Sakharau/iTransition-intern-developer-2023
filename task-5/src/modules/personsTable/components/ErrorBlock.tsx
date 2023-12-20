import { FC } from "react";
import { Alert, Button } from "react-bootstrap";

type Props = {
  isError: boolean;
  refetch: () => void;
}

const ErrorBlock: FC<Props> = ({isError, refetch}) => {

  return (
    <>
      <Alert show={isError} variant="secondary">
        <div className="d-flex justify-content-center align-items-center">
          <div style={{flexGrow: "1"}}>
            Something went wrong!
          </div>
          <Button onClick={refetch} variant="dark">
            Try Again
          </Button>
        </div>
      </Alert>
    </>
  );
};

export default ErrorBlock;
