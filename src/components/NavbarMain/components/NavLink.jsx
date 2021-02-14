import React from "react";
import MyLink from "../../MyLink/MyLink";
import { CustomNav } from "../styles/NavbarMainStyle";

const NavLink = (props) => <CustomNav componentClass={MyLink} {...props} />;

export default NavLink;
