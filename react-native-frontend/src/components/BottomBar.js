import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Pressable } from "react-native";
import { useRoute } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import theme from "../css/theme";

function BottomBar() {
  const navigation = useNavigation();
  const route = useRoute();
  const { name } = route;

  const tabs = [
    {
      name: "Profile",
      icon: "user",
    },
    {
      name: "Messages",
      icon: "envelope",
    },
    {
      name: "Moods",
      icon: "brain",
    },
  ];

  return (
    <View style={style.bar}>
      {tabs.map((tab, j) => (
        <Pressable
          key={j}
          style={{
            ...style.tab,
            ...(name === tab.name ? style.tabActive : null),
          }}
          onPress={() => navigation.navigate(tab.name)}
        >
          <FontAwesome5
            style={{
              ...style.icon,
              ...(name === tab.name ? style.iconActive : null),
            }}
            name={tab.icon}
          />
        </Pressable>
      ))}
    </View>
  );
}

const style = StyleSheet.create({
  bar: {
    display: "flex",
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  tab: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "33.33%",
    backgroundColor: theme.accent1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 40,
  },
  tabActive: {
    backgroundColor: theme.base2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 50,
  },
  icon: {
    fontSize: 20,
    color: "#bbb",
  },
  iconActive: {
    color: "white",
  },
});

export default BottomBar;
