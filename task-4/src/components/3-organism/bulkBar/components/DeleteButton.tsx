import { FC, ReactElement } from 'react';
import { TrashFill } from 'react-bootstrap-icons';
import { useDeleteUsersMutation } from '../../../../API/UserAPI';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import RectButton from '../../../1-atom/button/RectButton';
import {selectedUsersSlice} from '../../../../store/reducers/selectedUsersSlice';

const DeleteButton: FC = (): ReactElement => {
  const [deleteUsers, {isLoading}] = useDeleteUsersMutation();
  const {selectedUsers} = useAppSelector(state=>state.selectedUsersSlice);
  const dispath = useAppDispatch();
  const { clearSelectedList } = selectedUsersSlice.actions;
  
  const clickHandler = async () => {
    await deleteUsers({
      emails: selectedUsers
    });
    dispath(clearSelectedList())
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