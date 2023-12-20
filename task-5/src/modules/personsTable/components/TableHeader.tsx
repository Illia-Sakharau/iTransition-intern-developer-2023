import { FC, ReactElement } from 'react';

const TableHeader: FC = (): ReactElement => {

  return (
    <thead>
      <tr>
        <th>##</th>
        <th>Identification #</th>
        <th>Full name</th>
        <th>Address</th>
        <th>Phone number</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
