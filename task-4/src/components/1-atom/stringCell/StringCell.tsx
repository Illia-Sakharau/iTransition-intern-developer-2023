import classes from "./style.module.scss";
import { FC, ReactElement } from 'react';

type Props = {
  isHeader?: boolean;
  titles: string[];
  isActive?: boolean;
};

const StringCell: FC<Props> = ({ isHeader, titles, isActive = true }): ReactElement => {
  const inner = titles.map((title, i) => {
    return (
      <div key={title} className={classes[`${i === 0 ? 'first' : 'secondary'}`]} >
        {title}
      </div>
    )
  });
  const cellClassName = isActive ? classes.cell : `${classes.cell} opacity-50`;

  return (<>
    {
      isHeader
        ? <th className={cellClassName}>{inner}</th>
        : <td className={cellClassName}>{inner}</td>
    }
  </>
  );
};

export default StringCell;
