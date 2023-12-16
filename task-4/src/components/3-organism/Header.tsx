import { Link } from 'react-router-dom';
import { FC, ReactElement } from 'react';
import { NavRoutes } from '../../types/routes';
import { useAuth } from '../../hooks/useAuth';
import { Navbar, Button, Container, ButtonToolbar } from 'react-bootstrap';
import Greeting from '../2-molecule/greeting/Greeting';
import { useLogout } from '../../hooks/useLogout';

const Header: FC = (): ReactElement => {
  const {isAuth, name} = useAuth();
  const { logout } = useLogout();

  return (
    <Navbar collapseOnSelect bg='dark' variant='dark' sticky='top'>
      <Container>
        <Navbar.Brand href={NavRoutes.users}>TaBLe</Navbar.Brand>
          <ButtonToolbar className="justify-content-end gap-3">
            {isAuth
              ? <>
                <Greeting name={(name as string)}/>
                <Button variant="outline-danger" onClick={logout}>SignOut</Button>
              </>
              : <>
                <Link to={NavRoutes.login}>
                  <Button>Login</Button>
                </Link>
                <Link to={NavRoutes.registration}>
                  <Button variant="link" >Registration</Button>
                </Link>
                
              </>
            }
          </ButtonToolbar>
      </Container>
    </Navbar>
  );
};

export default Header;
