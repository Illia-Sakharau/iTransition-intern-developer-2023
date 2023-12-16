import { FC, ReactElement, useState } from 'react';
import StringCell from '../../../1-atom/stringCell/StringCell';
import { UserInfo } from '../../../../types/users';
import { USER_POSITION } from '../../../../constants';
import CheckboxCell from '../../../1-atom/checkboxCell/CheckboxCell';
import { useAppDispatch } from '../../../../hooks/redux';
import { selectedUsersSlice } from '../../../../store/reducers/selectedUsers';
import { prepareDate } from '../utils/prepareDate';

type Props = {
  userInfo: UserInfo;
  isSelectedUser: boolean;
};

const TableRaw: FC<Props> = ({userInfo, isSelectedUser}): ReactElement => {
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
      dispath(selectUser(email))
    }
    setIsSelected(!isSelected)
  }

  return (
    <tr onClick={handleClick} style={{cursor:'pointer'}}>
      <CheckboxCell isActive={isSelected} />
      <StringCell titles={[username, userPosition]} />
      <StringCell titles={[email]} />
      <StringCell titles={[date,time]} />
      <StringCell titles={[status]} />
    </tr>
  );
};

export default TableRaw;
