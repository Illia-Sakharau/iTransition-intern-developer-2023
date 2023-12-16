import { FC, ReactElement } from 'react';
import { Container, Table } from 'react-bootstrap';
import { UserInfo } from '../../../types/users';
import TableHeader from './components/TableHeader';
import TableRaw from './components/TableRaw';
import { useAppSelector } from '../../../hooks/redux';

type Props = {
  usersList?: UserInfo[];
};

const UserTable: FC<Props> = ({usersList}): ReactElement => {
  const {selectedUsers} = useAppSelector(state=>state.selectedUsersSlice);
  
  return (
    <>
      <Container>
        {usersList
          ? 
            <Table size="md" responsive striped hover>
              <TableHeader />
              <tbody>
                {usersList?.map((user) => {
                  const isSelectedUser = selectedUsers.includes(user.email);
                  return <TableRaw key={user._id} userInfo={user} isSelectedUser={isSelectedUser}/>
                })}
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
