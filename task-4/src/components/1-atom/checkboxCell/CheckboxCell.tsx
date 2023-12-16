import classes from "./style.module.scss";
import { FC, ReactElement, useEffect, useRef } from 'react';
import FormCheck from 'react-bootstrap/FormCheck'

type Props = {
  isActive: boolean;
  action: () => void;
  isHeader?: boolean;
  isIndeterminate?: boolean;
};

const CheckboxCell: FC<Props> = ({ isActive, action, isHeader, isIndeterminate }): ReactElement => {
  const checkRef = useRef<(HTMLInputElement)>();
  const inner = <FormCheck
    type='checkbox'
    id={`default-checkbox`}
    checked={isActive}
    onChange={action}
    ref={checkRef}
  />


  useEffect(() => {
    if (checkRef.current) {
      checkRef.current.indeterminate = !!isIndeterminate;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIndeterminate])
  
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
