import { Outlet } from 'react-router-dom';
import { FC, ReactElement } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import IMG from '../../../assets/form-img.jpg';
import classes from "./style.module.scss";

type Props = unknown;

const Auth: FC<Props> = (): ReactElement => {
  
  return (
    <Container className={classes.wrapper}>
      <Row xs='1' sm='1' md='2'>
        <Col className={classes.image}>
          <Image src={IMG} rounded fluid />
        </Col>
        <Col className={classes.form}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
