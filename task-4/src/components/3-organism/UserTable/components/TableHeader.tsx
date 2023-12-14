import { FC, ReactElement } from 'react';
import StringCell from '../../../1-atom/stringCell/StringCell';

const TableHeader: FC = (): ReactElement => {
  
  return (
    <thead>
      <tr>
        <StringCell isHeader titles={['#']} />
        <StringCell isHeader titles={['Name', 'Position']} />
        <StringCell isHeader titles={['e-Mail']} />
        <StringCell isHeader titles={['Last login']} />
        <StringCell isHeader titles={['Status']} />
      </tr>
    </thead>
  );
};

export default TableHeader;
