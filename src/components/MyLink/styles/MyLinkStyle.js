import styled from "styled-components";
import { Link } from "react-router-dom";

export const CustomLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover,
  &::active,
  &::focus {
    color: green;
    text-decoration: none;
  }
`;
