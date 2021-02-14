import styled from "styled-components";
import { Navbar } from "rsuite";
import { Nav } from "rsuite";

export const MainNavbarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const CustomNavbar = styled(Navbar)`
  width: 100%;
  padding: 10px 3%;
`;

export const CustomNav = styled(Nav.Item)`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding-top: 18px;
  height: 50px;
  align-items: center;
  vertical-align: middle;
  a {
    height: 100%;
  }
`;
