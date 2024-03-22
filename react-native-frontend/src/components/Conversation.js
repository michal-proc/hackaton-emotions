import React, { useEffect, useState, useMemo } from "react";
import { Pressable, View } from "react-native";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import theme from "../css/theme";
import Text from "./Text";
import useScreenSize from "../hooks/useScreenSize";
import apiRoute from "../api/apiConfig";
import moment from "moment";

export const Conversation = ({
  messages,
  ownerId,
  participantId,
  index,
  openChat,
}) => {
  const { screenWidth } = useScreenSize();
  const [participant, setParticipant] = useState();

  useEffect(() => {
    fetch(apiRoute(`/user/${participantId}`))
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setParticipant(res.data);
      });
  }, [participantId]);

  const sortedMessages = useMemo(
    () =>
      messages
        .map((message) => {
          message.sent_at = moment(message.sent_at);
          return message;
        })
        .sort((a, b) => a.sent_at.unix() - b.sent_at.unix()),
    [messages]
  );

  return (
    <Pressable
      style={{ width: screenWidth }}
      onPress={() => openChat(messages, ownerId, participantId)}
    >
      <View style={{ ...style.wrapper, borderTopWidth: index === 0 ? 1 : 0 }}>
        {participant && (
          <>
            <View style={style.avatar}>
              <Image
                source="https://picsum.photos/200/300"
                contentFit="cover"
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={{ color: theme.grayMid }}>
                {sortedMessages &&
                  sortedMessages[sortedMessages.length - 1]?.sent_at.format(
                    "h:mm"
                  )}
              </Text>
              <Text size="md" type="bold" style={{ color: theme.base1 }}>
                {participant.last_name &&
                  participant.first_name &&
                  `${participant.first_name} ${participant.last_name}`}
              </Text>
            </View>
          </>
        )}
      </View>
    </Pressable>
  );
};

export default Conversation;

const style = StyleSheet.create({
  avatar: {
    width: 70,
    borderRadius: 35,
    backgroundColor: theme.accent1,
    height: 70,
    overflow: "hidden",
  },
  wrapper: {
    width: "100%",
    borderBottomWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: theme.accent4,
  },
});
