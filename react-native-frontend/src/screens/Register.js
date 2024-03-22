import React, { useState, useMemo } from "react";
import { View, StyleSheet } from "react-native";
import WithLayout from "../hoc/WithLayout";
import Text from "../components/Text";
import { Image } from "expo-image";
import image from "./../../assets/splash.jpeg";
import Card from "../components/Card";
import theme from "../css/theme";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";
import useScreenSize from "../hooks/useScreenSize";
import apiRoute from "../api/apiConfig";
import WithContext from "../hoc/WithContext";

function Register({ navigation, state, dispatch }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [fetching, setFetching] = useState(false);

  const { screenHeight } = useScreenSize();

  const fields = useMemo(
    () => [
      {
        value: username,
        setValue: setUsername,
        name: "username",
        placeholder: "Login",
      },
      {
        value: email,
        setValue: setEmail,
        name: "email",
        placeholder: "E-mail",
      },
      {
        value: password,
        setValue: setPassword,
        name: "password",
        placeholder: "Hasło",
      },
      {
        value: repeatPassword,
        setValue: setRepeatPassword,
        name: "repeat_password",
        placeholder: "Powtórz hasło",
      },
      {
        value: firstName,
        setValue: setFirstName,
        name: "first_name",
        placeholder: "Imię",
      },
      {
        value: lastName,
        setValue: setLastName,
        name: "last_name",
        placeholder: "Nazwisko",
      },
      {
        value: age,
        setValue: setAge,
        name: "age",
        placeholder: "Wiek",
      },
    ],
    [username, email, password, firstName, lastName, age]
  );

  const handleRegister = () => {
    if (fetching) return;

    setFetching(true);

    fetch(apiRoute("/user"), {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        age,
      }),
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setFetching(false);
        dispatch({
          type: "SET_USER",
          payload: { user: res.data, userToken: res.data.token },
        });
        console.info(JSON.stringify(state, null, 2));
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Image
        source={image}
        contentFit="cover"
        style={{
          flex: 1,
          height: "100%",
          width: "100%",
          position: "absolute",
          bottom: 0,
        }}
      />
      <Card
        scroll
        styleProp={{
          justifyContent: "space-between",
          maxHeight: 0.8 * screenHeight,
          minHeight: 400,
        }}
      >
        <Header style={{ color: theme.base1 }}>Rejestracja</Header>
        <View style={{ flex: 1, width: "100%", marginTop: 24 }}>
          {fields.map((field) => (
            <Input
              key={field.name}
              placeholder={field.placeholder}
              onChange={field.setValue}
            />
          ))}
          <Button
            onClick={handleRegister}
            styleProp={StyleSheet.create({ width: "100%" })}
          >
            <Text type="bold">Zarejestruj się</Text>
          </Button>
        </View>
        <Text style={{ color: theme.grayMid, marginBottom: 2 }}>
          Masz już konto?
        </Text>
        <Button
          type="secondary"
          onClick={() => {
            navigation.navigate("Home");
          }}
          styleProp={StyleSheet.create({ width: "100%" })}
        >
          <Text type="bold">Wróć do logowania</Text>
        </Button>
      </Card>
    </>
  );
}

export default WithContext(WithLayout(Register));
