import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = unknown;

const Footer: FC<Props> = (): ReactElement => {
  return (
    <footer className={classes.footer}>
      FOOTER
    </footer>
  );
};

export default Footer;
