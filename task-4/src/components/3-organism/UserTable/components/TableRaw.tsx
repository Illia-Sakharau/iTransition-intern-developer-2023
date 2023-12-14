import { FC, ReactElement } from 'react';
import StringCell from '../../../1-atom/stringCell/StringCell';
import { UserInfo } from '../../../../types/users';

type Props = {
  userInfo: UserInfo;
};

const TableRaw: FC<Props> = ({userInfo}): ReactElement => {
  const {username, position, email, lastLogin, isActive} = userInfo;
  const lastLoginDate = new Date(lastLogin);
  const UTCdate = lastLoginDate.toUTCString().split(' ');
  const date = UTCdate.slice(0, 4).join(' ');
  const time = UTCdate.slice(4).join(' ');
  const status = isActive ? 'Active' : 'Blocked';
  

  return (
    <tr>
      <StringCell titles={['#']} />
      <StringCell titles={[username, position || '---']} />
      <StringCell titles={[email]} />
      <StringCell titles={[date,time]} />
      <StringCell titles={[status]} />
    </tr>
  );
};

export default TableRaw;
