import { Logo } from '@components/logo';
import LogoImage from '@assets/images/logo-product.svg';
import { Button } from '@components/buttons';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavMenu } from '@components/menu-list';
import { menuList } from '@data/header';

export const Header = (): JSX.Element => {
  return (
    <header className="page-header">
      <Navbar variant="light" expand="lg">
        <Container>
          <div className="navbar-branch col-lg-3">
            <Logo logoUrl={LogoImage} imgClass="header-logo" className="header-logo__text" />
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="nav-collapse" id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavMenu menuItem={menuList} />
              <div className="btn-menu">
                <Button
                  color="primary"
                  children="Sign In"
                  type="button"
                  extraClass="btn btn-outline-primary"
                />
                <Button
                  color="secondary"
                  children="Sign Up"
                  type="button"
                  extraClass="btn btn-secondary"
                />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
