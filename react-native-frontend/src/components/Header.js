import React from "react";
import Text from "./Text";

const Header = ({ children, style }) => {
  return (
    <Text style={style} size="xl" type="header">
      {children}
    </Text>
  );
};

export default Header;
