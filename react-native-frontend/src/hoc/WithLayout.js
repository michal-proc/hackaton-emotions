import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Platform } from "react-native";

function WithLayout(Component) {
  return function LayoutRenderer(props) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          ...styles.androidSafe,
        }}
      >
        <Component {...props} />
      </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
  androidSafe: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default WithLayout;
