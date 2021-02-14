import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CustomNavbar, MainNavbarDiv } from "./styles/NavbarMainStyle";
import { useLocation } from "react-router-dom";
import { Navbar, Nav, Dropdown, Icon } from "rsuite";
import { activeKeySelector } from "../../services/reselect/NavbarReselect";
import { setActiveKey } from "../../services/actions";
import NavLink from "./components/NavLink";

const NavbarMain = () => {
  const activeKey = useSelector(activeKeySelector);
  const location = useLocation();
  const dispatch = useDispatch();

  console.log(activeKey);

  const onSelect = (eventKey) => {
    console.log(eventKey, "eventkey");
    dispatch(setActiveKey(eventKey));
  };

  console.log(location, "path ");

  console.log(window.location.pathname, "pathname");

  return (
    <MainNavbarDiv>
      <CustomNavbar>
        <Navbar.Header>
          <a href="#" className="navbar-brand logo">
            RSUITE
          </a>
        </Navbar.Header>
        <Navbar.Body>
          <Nav onSelect={onSelect} activeKey={activeKey}>
            <NavLink eventKey="1" href="/">
              Home
            </NavLink>
            <NavLink href="/about_us" eventKey="2">
              About Us
            </NavLink>
            <Nav.Item eventKey="3">Products</Nav.Item>
            <Dropdown title="About">
              <Dropdown.Item eventKey="4">Company</Dropdown.Item>
              <Dropdown.Item eventKey="5">Team</Dropdown.Item>
              <Dropdown.Item eventKey="6">Contact</Dropdown.Item>
            </Dropdown>
          </Nav>
          <Nav pullRight>
            <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
          </Nav>
        </Navbar.Body>
      </CustomNavbar>
    </MainNavbarDiv>
  );
};

export default NavbarMain;
