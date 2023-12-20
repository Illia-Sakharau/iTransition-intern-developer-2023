import { FC, ReactElement } from 'react';
import { Person } from '../../../types/persons';

type Props = {
  personInfo: Person;
};

const TableRaw: FC<Props> = ({personInfo}): ReactElement => {

  return (
    <tr>
      <td>{personInfo.index}</td>
      <td>{personInfo.uuid}</td>
      <td>{personInfo.name}</td>
      <td>{personInfo.address}</td>
      <td>{personInfo.phone}</td>
    </tr>
  );
};

export default TableRaw;
