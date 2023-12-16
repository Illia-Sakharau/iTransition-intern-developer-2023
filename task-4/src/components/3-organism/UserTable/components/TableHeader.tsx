import { FC, ReactElement, useEffect, useState } from 'react';
import StringCell from '../../../1-atom/stringCell/StringCell';
import CheckboxCell from '../../../1-atom/checkboxCell/CheckboxCell';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import {selectedUsersSlice} from '../../../../store/reducers/selectedUsersSlice';

const TableHeader: FC = (): ReactElement => {
  const {selectedUsers} = useAppSelector(state=>state.selectedUsersSlice);
  const {users} = useAppSelector(state=>state.usersSlice);
  const dispatch = useAppDispatch();
  const { clearSelectedList, selectUser } = selectedUsersSlice.actions;


  const [isIndeterminate, setIsIndeterminate] = useState(!(selectedUsers.length === 0 || selectedUsers.length === users.length));
  const [isActive, setIsActive] = useState(selectedUsers.length === users.length);

  const handleClick = () => {
    if (isActive) {
      dispatch(clearSelectedList());
    } else {
      const usersEmails = users.map((user) => user.email)
      dispatch(selectUser(usersEmails))
    }
    setIsActive(!isActive)
    setIsIndeterminate(false)
  }
  
  useEffect(() => {
    if(selectedUsers.length === 0) {
      setIsActive(false)
      setIsIndeterminate(false)
    } else if (selectedUsers.length === users.length) {
      setIsActive(true)
      setIsIndeterminate(false)
    } else if (!isIndeterminate) {
      setIsActive(true)
      setIsIndeterminate(true)
    }    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selectedUsers])

  return (
    <thead>
      <tr>
        <CheckboxCell isIndeterminate={isIndeterminate} isActive={isActive} action={handleClick} />
        <StringCell isHeader titles={['Name', 'Position']} />
        <StringCell isHeader titles={['e-Mail']} />
        <StringCell isHeader titles={['Last login']} />
        <StringCell isHeader titles={['Status']} />
      </tr>
    </thead>
  );
};

export default TableHeader;
