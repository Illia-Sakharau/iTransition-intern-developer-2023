import { FC, ReactElement } from 'react';
import { LockFill } from 'react-bootstrap-icons';
import { useSetUsersStatusMutation } from '../../../../API/UserAPI';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import RectButton from '../../../1-atom/button/RectButton';
import {selectedUsersSlice} from '../../../../store/reducers/selectedUsersSlice';
import { useAuth } from '../../../../hooks/useAuth';
import { useLogout } from '../../../../hooks/useLogout';

const BlockButton: FC = (): ReactElement => {
  const { email } = useAuth();
  const [blockUsers, {isLoading}] = useSetUsersStatusMutation();
  const {selectedUsers} = useAppSelector(state=>state.selectedUsersSlice);
  const dispath = useAppDispatch();
  const { clearSelectedList } = selectedUsersSlice.actions;
  const { logout } = useLogout();
  
  const clickHandler = async () => {
    await blockUsers({
      emails: selectedUsers,
      isActive: false
    });
    if (selectedUsers.includes(email as string)) {
      logout();
    }
    dispath(clearSelectedList())
  }

  return (
    <RectButton 
      variant="secondary"
      size="lg"
      onClick={clickHandler}
      isLoading={isLoading}
    >
      <LockFill />
      Block
    </RectButton>
  );
};

export default BlockButton;
