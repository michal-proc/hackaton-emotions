import React from "react";
import { KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";
import theme from "../css/theme";

export const Card = ({ children, styleProp, scroll }) => {
  return (
    <KeyboardAvoidingView style={{ ...style, ...styleProp }}>
      {scroll ? (
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{ alignItems: "center" }}
        >
          {children}
        </ScrollView>
      ) : (
        children
      )}
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  backgroundColor: theme.offWhite,
  paddingHorizontal: 24,
  paddingVertical: 48,
  width: "80%",
  flexDirection: "column",
  borderRadius: 16,
  justifyContent: "center",
  alignItems: "center",

  elevation: 10,
});

export default Card;
