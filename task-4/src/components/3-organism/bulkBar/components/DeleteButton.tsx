import { FC, ReactElement } from 'react';
import { TrashFill } from 'react-bootstrap-icons';
import { useDeleteUsersMutation } from '../../../../API/UserAPI';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import RectButton from '../../../1-atom/button/RectButton';
import {selectedUsersSlice} from '../../../../store/reducers/selectedUsersSlice';
import { useLogout } from '../../../../hooks/useLogout';
import { useAuth } from '../../../../hooks/useAuth';

const DeleteButton: FC = (): ReactElement => {
  const { email } = useAuth();
  const [deleteUsers, {isLoading}] = useDeleteUsersMutation();
  const {selectedUsers} = useAppSelector(state=>state.selectedUsersSlice);
  const dispath = useAppDispatch();
  const { clearSelectedList } = selectedUsersSlice.actions;
  const { logout } = useLogout();
  
  const clickHandler = async () => {
    await deleteUsers({
      emails: selectedUsers
    });
    if (selectedUsers.includes(email as string)) {
      logout();
    }
    dispath(clearSelectedList());
  }

  return (
    <RectButton 
      variant="danger"
      size="lg"
      onClick={clickHandler}
      isLoading={isLoading}
    >
      <TrashFill />
    </RectButton>
  );
};

export default DeleteButton;