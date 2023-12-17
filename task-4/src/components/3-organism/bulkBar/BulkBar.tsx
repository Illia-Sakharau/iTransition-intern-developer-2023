import { FC, ReactElement } from 'react';
import { Container } from 'react-bootstrap';
import BlockButton from './components/BlockButton';
import UnblockButton from './components/UnblockButton';
import DeleteButton from './components/DeleteButton';

const BulkBar: FC = (): ReactElement => {

  return (
    <Container className='mt-5 mb-2'>
      <BlockButton />{' '}
      <UnblockButton />{' '}
      <DeleteButton />
    </Container>
  );
};

export default BulkBar;
