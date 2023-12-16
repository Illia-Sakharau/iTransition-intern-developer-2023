import { FC, ReactElement, useEffect, useState } from 'react';
import StringCell from '../../../1-atom/stringCell/StringCell';
import { UserInfo } from '../../../../types/users';
import { USER_POSITION } from '../../../../constants';
import CheckboxCell from '../../../1-atom/checkboxCell/CheckboxCell';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { selectedUsersSlice } from '../../../../store/reducers/selectedUsersSlice';
import { prepareDate } from '../utils/prepareDate';

type Props = {
  userInfo: UserInfo;
  isSelectedUser: boolean;
};

const TableRaw: FC<Props> = ({userInfo, isSelectedUser}): ReactElement => {
  const {selectedUsers} = useAppSelector(state=>state.selectedUsersSlice);
  const {users} = useAppSelector(state=>state.usersSlice);
  const [ isSelected, setIsSelected ] = useState(isSelectedUser);
  const {username, position, email, lastLogin, isActive} = userInfo;
  const { date, time } = prepareDate(lastLogin);
  const status = isActive ? 'Active' : 'Blocked';
  const userPosition = USER_POSITION.find((pos) => pos.value === position)?.text || '---';
  const dispath = useAppDispatch();
  const { selectUser, unselectUser } = selectedUsersSlice.actions;
  
  const handleClick = () => {
    if (isSelected) {
      dispath(unselectUser(email))
    } else {
      dispath(selectUser([email]))
    }
    setIsSelected(!isSelected)
  }
  
  useEffect(() => {
    if (selectedUsers.length === 0 && isSelected) {
      setIsSelected(false)
    }
    if (selectedUsers.length === users.length && !isSelected) {
      setIsSelected(true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selectedUsers])

  return (
    <tr onClick={handleClick} style={{cursor:'pointer'}} >
      <CheckboxCell isActive={isSelected} action={handleClick} />
      <StringCell isActive={isActive} titles={[username, userPosition]}/>
      <StringCell isActive={isActive} titles={[email]} />
      <StringCell isActive={isActive} titles={[date,time]} />
      <StringCell isActive={isActive} titles={[status]} />
    </tr>
  );
};

export default TableRaw;
