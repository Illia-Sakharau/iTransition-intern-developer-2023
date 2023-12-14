import { Spinner } from "react-bootstrap";
import classes from "./style.module.scss";
import { FC, ReactElement } from 'react';

const PageLoader: FC = (): ReactElement => {
  return (
    <div className={classes.loader}>
      <Spinner animation="border" role="status" />
      <span>Loading...</span>
    </div>
  );
};

export default PageLoader;
