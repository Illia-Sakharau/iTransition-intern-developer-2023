import { useNavigate } from 'react-router-dom';
import { FC, ReactElement } from 'react';
import { NavRoutes } from '../../types/routes';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { currentUserSlice } from '../../store/reducers/currentUserSlice';
import { useAuth } from '../../hooks/useAuth';
import { Navbar, Button, Container, ButtonToolbar } from 'react-bootstrap';
import Greeting from '../2-molecule/greeting/Greeting';

const Header: FC = (): ReactElement => {
  const {isAuth} = useAuth();
  const navigate = useNavigate();
  const dispath = useAppDispatch();
  const { removeCurentUser } = currentUserSlice.actions;
  const { email } = useAppSelector(state=> state.currentUserSlice)

  const handleSignOut = () => {
    dispath(removeCurentUser())
    navigate(NavRoutes.login)
  }

  return (
    <Navbar collapseOnSelect bg='dark' variant='dark' sticky='top'>
      <Container>
        <Navbar.Brand href={NavRoutes.users}>TaBLe</Navbar.Brand>
          <ButtonToolbar className="justify-content-end gap-3">
            {isAuth
              ? <>
                <Greeting name={(email as string)}/>
                <Button variant="outline-danger" onClick={handleSignOut}>SignOut</Button>
              </>
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
