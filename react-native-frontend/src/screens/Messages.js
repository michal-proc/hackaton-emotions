import React, { useState } from "react";
import Text from "./../components/Text";
import WithLayout from "../hoc/WithLayout";
import { useMutation, useQuery, useQueryClient } from "react-query";
import apiRoute from "../api/apiConfig";
import WithContext from "../hoc/WithContext";
import theme from "../css/theme";
import Conversation from "../components/Conversation";
import { ScrollView, View } from "react-native";
import Header from "../components/Header";
import useScreenSize from "../hooks/useScreenSize";
import Card from "../components/Card";
import { FontAwesome5 } from "@expo/vector-icons";

function Messages({ state }) {
  const queryClient = useQueryClient();
  const [chatEnabled, setChatEnabled] = useState(false);
  const { screenWidth, screenHeight } = useScreenSize();

  const getMessages = async () => {
    if (!state.user.id) return;

    const response = await fetch(apiRoute(`/message/${state.user.id}`), {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response not ok");
    }
    return await response.json();
  };

  const { isLoading, error, data, isFetching } = useQuery(
    "messages",
    getMessages,
    {
      refetchInterval: 10000, // ms
    }
  );

  const postMessage = () => {};

  const mutation = useMutation(postMessage, {
    onSuccess: () => {
      queryClient.invalidateQueries("messages");
    },
  });

  if (isLoading)
    return <Text style={{ color: theme.base1 }}>Ładowanie...</Text>;

  if (error) return <Text style={{ color: theme.base1 }}>Wystąpił błąd!</Text>;

  const openChat = () => {
    setChatEnabled(true);

    setTimeout(() => setChatEnabled(false), 8000);
  };

  const messages = [
    {
      text: "Wasze ulubione wspólne wspomnienie.",
      type: "question",
      id: 0,
    },
    {
      from: false,
      text: "UUUuuuuu, chyba wakacje w Splicie!!",
      type: "message",
      id: 1,
    },
    {
      from: true,
      text: "TAK",
      type: "message",
      id: 2,
    },
    {
      from: true,
      text: "ALBO DOMÓWKA U KACPERKA!",
      type: "message",
      id: 3,
    },
    {
      from: false,
      text: "tak tak tak..",
      type: "message",
      id: 4,
    },
  ];

  return (
    <>
      {chatEnabled ? (
        <View
          style={{
            width: screenWidth,
            height: screenHeight,
          }}
        >
          <Card
            styleProp={{
              position: "absolute",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "90%",
              height: "90%",
              elevation: 1000,
              zIndex: 100,
              left: 0.5 * screenWidth,
              top: 0.5 * screenHeight,
              transform: [
                { translateX: -0.45 * screenWidth },
                { translateY: -0.45 * screenHeight },
              ],
            }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                width: "100%",
                height: "100%",
              }}
            >
              {messages.map((message) => {
                if (message.type === "question") {
                  return (
                    <React.Fragment key={message.id}>
                      <Text
                        style={{
                          alignSelf: "center",
                          textAlign: "center",
                          marginBottom: 16,
                        }}
                        type="header"
                      >
                        Wasze pytanie na dziś!
                      </Text>
                      <Text
                        size="lg"
                        type="header"
                        style={{
                          alignSelf: "center",
                          textAlign: "center",
                          marginBottom: 32,
                        }}
                      >
                        {message.text}
                      </Text>
                    </React.Fragment>
                  );
                } else {
                  return (
                    <View
                      key={message.id}
                      style={{
                        paddingHorizontal: 32,
                        paddingVertical: 16,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: message.from
                          ? theme.accent1
                          : theme.base1,
                        alignSelf: message.from ? "flex-end" : "flex-start",
                        elevation: 10,
                        marginBottom: 16,
                        borderRadius: 100,
                      }}
                    >
                      <Text
                        type="bold"
                        style={{
                          color: message.from ? theme.base1 : theme.accent1,
                        }}
                      >
                        {message.text}
                      </Text>
                    </View>
                  );
                }
              })}
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "80%",
                  height: 60,
                  borderRadius: 30,
                  borderWidth: 2,
                  borderColor: theme.accent1,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 32,
                  paddingVertical: 16,
                  marginRight: 16,
                }}
              >
                <Text>Wpisz wiadomość...</Text>
              </View>
              <View
                style={{
                  backgroundColor: theme.accent1,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                }}
              >
                <FontAwesome5
                  style={{ color: theme.offWhite, fontSize: 25 }}
                  name="paper-plane"
                />
              </View>
            </View>
          </Card>
        </View>
      ) : (
        <>
          <View
            style={{
              height: "8%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Header>Wiadomości</Header>
          </View>
          <ScrollView
            contentContainerStyle={{
              flexDirection: "column",
              width: "100%",
              height: "84%",
            }}
          >
            {data.data.map((conversation, index) => (
              <Conversation
                index={index}
                key={conversation.id}
                ownerId={state.user.id}
                participantId={conversation.id}
                messages={conversation.messages}
                openChat={openChat}
              />
            ))}
          </ScrollView>
          <View
            style={{
              width: "100%",
              height: "8%",
              backgroundColor: theme.accent1,
            }}
          ></View>
        </>
      )}
    </>
  );
}
export default WithContext(WithLayout(Messages));
