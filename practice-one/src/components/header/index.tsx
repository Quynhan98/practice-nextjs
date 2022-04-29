import { Logo } from '@components/common/logo';
import LogoImage from '@assets/images/logo-product.svg';
import { Button } from '@components/common/button';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavMenu } from '@components/common/menu';
import { menu } from '@constant/data/header';
import './header.css';

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
              <NavMenu menuItem={menu} />
              <div className="btn-menu">
                <Button color="primary" type="button" extraClass="btn btn-outline-primary">
                  Sign In
                </Button>
                <Button color="secondary" type="button" extraClass="btn btn-secondary">
                  Sign Up
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
