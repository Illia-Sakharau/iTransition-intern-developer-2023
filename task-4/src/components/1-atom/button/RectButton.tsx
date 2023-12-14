import { FC, ReactElement } from 'react';
import { Button, ButtonProps, Spinner } from 'react-bootstrap';

type Props = {
  isLoading?: boolean;
} & ButtonProps;

const RectButton: FC<Props> = ({ isLoading, children, ...props }): ReactElement => {
  
  return (
    <Button 
      disabled={isLoading}
      {...props}
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
        : children
      }
    </Button>
  );
};

export default RectButton;
