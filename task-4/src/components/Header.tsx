import { useNavigate } from 'react-router-dom';
import { FC, ReactElement } from 'react';
import { NavRoutes } from '../types/routes';
import { useAppDispatch } from '../hooks/redux';
import { currentUserSlice } from '../store/reducers/currentUserSlice';
import { useAuth } from '../hooks/useAuth';
import { Navbar, Button, Container, ButtonToolbar } from 'react-bootstrap';

type Props = unknown;

const Header: FC<Props> = (): ReactElement => {
  const {isAuth} = useAuth();
  const navigate = useNavigate();
  const dispath = useAppDispatch();
  const { removeCurentUser } = currentUserSlice.actions;

  const handleSignOut = () => {
    dispath(removeCurentUser())
    navigate(NavRoutes.login)
  }

  return (
    <Navbar collapseOnSelect bg='dark' variant='dark' >
      <Container>
        <Navbar.Brand href={NavRoutes.users}>TaBLe</Navbar.Brand>
          <ButtonToolbar className="justify-content-end">
            {isAuth
              ? <Button variant="outline-danger" onClick={handleSignOut}>SignOut</Button>
              : <>
                <Button href={NavRoutes.login}>Login</Button>
                <Button variant="link" href={NavRoutes.registration}>Registration</Button>
              </>
            }
          </ButtonToolbar>
      </Container>
    </Navbar>
  );
};

export default Header;
