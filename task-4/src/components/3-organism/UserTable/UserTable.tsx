import { FC, ReactElement } from 'react';
import { Container, Table } from 'react-bootstrap';
import { UserInfo } from '../../../types/users';
import TableHeader from './components/TableHeader';
import TableRaw from './components/TableRaw';

type Props = {
  usersList?: UserInfo[];
};

const UserTable: FC<Props> = ({usersList}): ReactElement => {
  
  return (
    <>
      <Container>
        {usersList
          ? 
            <Table size="md" responsive striped hover>
              <TableHeader />
              <tbody>
                {usersList?.map((user) => <TableRaw key={user._id} userInfo={user}/>)}
              </tbody>
            </Table>
          :
            <h2>No data</h2>
        }
      </Container>
    </>
  );
};

export default UserTable;
