import classes from "./style.module.scss";
import { FC, ReactElement } from 'react';

type Props = {
  isHeader?: boolean;
  titles: string[];
};

const StringCell: FC<Props> = ({ isHeader, titles }): ReactElement => {
  const inner = titles.map((title, i) => {
    return (
      <div key={title} className={classes[`${i === 0 ? 'first' : 'secondary'}`]} >
        {title}
      </div>
    )
  });
  return (<>
    {
      isHeader
        ? <th className={classes.cell}>{inner}</th>
        : <td className={classes.cell}>{inner}</td>
    }
  </>
  );
};

export default StringCell;
