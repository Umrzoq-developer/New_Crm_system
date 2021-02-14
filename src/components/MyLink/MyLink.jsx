import React from "react";
import { CustomLink } from "./styles/MyLinkStyle";

const MyLink = React.forwardRef(({ href, as, children }, ref) => {
  return (
    <CustomLink to={href} href={href} as={as}>
      {children}
    </CustomLink>
  );
});

export default MyLink;
