import { FC, ReactElement } from 'react';
import { Button } from 'react-bootstrap';
import { UnlockFill } from 'react-bootstrap-icons';

const UnblockButton: FC = (): ReactElement => {

  return (
    <Button variant="secondary" size="lg">
      <UnlockFill />
    </Button>
  );
};

export default UnblockButton;
