import { FC, ReactElement } from 'react';
import { UnlockFill } from 'react-bootstrap-icons';
import { useSetUsersStatusMutation } from '../../../../API/UserAPI';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import RectButton from '../../../1-atom/button/RectButton';
import {selectedUsersSlice} from '../../../../store/reducers/selectedUsersSlice';

const UnblockButton: FC = (): ReactElement => {
  const [blockUsers, {isLoading}] = useSetUsersStatusMutation();
  const {selectedUsers} = useAppSelector(state=>state.selectedUsersSlice);
  const dispath = useAppDispatch();
  const { clearSelectedList } = selectedUsersSlice.actions;
  
  const clickHandler = async () => {
    await blockUsers({
      emails: selectedUsers,
      isActive: true
    });
    dispath(clearSelectedList())
  }

  return (
    <RectButton 
      variant="secondary"
      size="lg"
      onClick={clickHandler}
      isLoading={isLoading}
    >
      <UnlockFill />
    </RectButton>
  );
};

export default UnblockButton;
