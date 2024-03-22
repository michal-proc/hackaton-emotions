import React, { useEffect } from "react";
import Login from "../components/Login";
import WithLayout from "../hoc/WithLayout";
import WithContext from "../hoc/WithContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import apiRoute from "../api/apiConfig";

function Home({ navigation, state, dispatch }) {
  useEffect(() => {
    const maintainLogin = async () => {
      const token = await AsyncStorage.getItem("userToken");
      if (!token) return;
      const result = await fetch(apiRoute("/token"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token,
        }),
      });
      const json = await result.json();
      if (json.success === false) await AsyncStorage.removeItem("userToken");
      dispatch({ type: "SET_USER", payload: json.data });
      navigation.navigate("Profile");
    };

    maintainLogin();
  }, []);

  return <Login navigation={navigation} />;
}

export default WithLayout(WithContext(Home));
