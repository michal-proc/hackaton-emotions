import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";

import theme from "../css/theme";

export const Button = ({
  children,
  onClick,
  type = "primary",
  styleProp,
  disabled,
}) => {
  return (
    <Pressable
      disabled={disabled}
      style={{ ...style.default.wrapper, ...style[type].wrapper, ...styleProp }}
      onPress={onClick}
    >
      <Text style={{ ...style.default.text, ...style[type].text }}>
        {children}
      </Text>
    </Pressable>
  );
};

export default Button;

const style = StyleSheet.create({
  default: {
    wrapper: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 4,
      marginBottom: 16,
      elevation: 2,
      alignItems: "center",
    },
    text: {
      fontFamily: "Gantari-Bold",
    },
  },
  primary: {
    wrapper: {
      backgroundColor: theme.base1,
    },
    text: { color: theme.accent1 },
  },
  secondary: {
    wrapper: {
      backgroundColor: theme.accent1,
    },
    text: { color: theme.base1 },
  },
});
