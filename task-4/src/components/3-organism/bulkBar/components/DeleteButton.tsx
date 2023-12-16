import { FC, ReactElement } from 'react';
import { Button } from 'react-bootstrap';
import { TrashFill } from 'react-bootstrap-icons';

const DeleteButton: FC = (): ReactElement => {

  return (
    <Button variant="danger" size="lg">
      <TrashFill />
    </Button>
  );
};

export default DeleteButton;
