import { Link } from 'react-router-dom';
import { FC, ReactElement } from 'react';
import { NavRoutes } from '../types/routes';
import { Container } from 'react-bootstrap';

type Props = unknown;

const NotFound: FC<Props> = (): ReactElement => {
  return (
    <Container style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to={NavRoutes.users}>Go to home</Link>
    </Container>
  )
};

export default NotFound;
