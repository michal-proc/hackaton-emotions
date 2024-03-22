import { Text as NativeText } from "react-native";
import React from "react";

function Text({ children, style, type = "regular", size = "md" }) {
  return (
    <NativeText
      style={{
        fontFamily:
          type === "header"
            ? "Tiro-Bangla"
            : type === "bold"
            ? "Gantari-Bold"
            : "Gantari-Regular",
        fontSize:
          size === "xl"
            ? 40
            : size === "lg"
            ? 24
            : size === "sm"
            ? 12
            : size === "xs"
            ? 8
            : 16,
        ...style,
      }}
    >
      {children}
    </NativeText>
  );
}

export default Text;
