import Form from "react-bootstrap/esm/Form";
import classes from "./style.module.scss";
import { FC, ReactElement } from 'react';

type Props = {
  isActive: boolean;
  action: () => void;
  isHeader?: boolean;
};

const CheckboxCell: FC<Props> = ({ isActive, action, isHeader }): ReactElement => {
  const inner = <Form.Check
  type='checkbox'
  id={`default-checkbox`}
  checked={isActive}
  onChange={action}
/>
  return (<>
    {
      isHeader
        ? <th className={classes.cell}>{inner}</th>
        : <td className={classes.cell}>{inner}</td>
    }
  </>
  );
};

export default CheckboxCell;
