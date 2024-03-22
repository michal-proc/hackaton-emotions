import React, { useState } from "react";
import WithContext from "../hoc/WithContext";
import { View, TextInput, StyleSheet, ScrollView, Pressable } from "react-native";
import theme from "../css/theme";
import Text from './../components/Text';

function InterestsPicker({ state, dispatch }) {
  const [hints, setHints] = useState([]);
  const [search, setSearch] = useState('');
  
  const onTextInput = (text) => {
    if(text == '') {
        setSearch(text);
        return false;
    }
    const matches = state.interests.filter(interest => interest.includes(text));
    setHints(matches);
  };

  const addInterest = (hint) => {
    const allInterests = [ ...(state.user.user_interests ? state.user.user_interests : []), hint];
    dispatch({type: 'SET_USER_INTERESTS', payload: allInterests})
    setSearch('');  
    setHints([]);
  }

  return (
    <View style={{flex: 1, width: "100%"}}>
      {state.user.user_interests ? <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>{state.user.user_interests.map((single, j) => (<Text type='bold' style={{color: "black", backgroundColor: theme.accent1, paddingVertical: 5, paddingHorizontal: 10, margin: 5, borderRadius: 15}} key={j}>{single}</Text>))}</View> : null}
      <TextInput style={style.input} value={search} placeholder="Zainteresowania" onChangeText={onTextInput}></TextInput>
      <ScrollView style={style.hintRow} horizontal={true}>
        {hints.map((hint, j) => (
          <Pressable style={style.hint} key={j} onPress={() => addInterest(hint)}>
            <Text>{hint} +</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  hintRow: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    flexWrap: "nowrap",
    maxHeight: 30
  },
  hint: {
    marginRight: 5,
    padding: 5,
    borderRadius: 4,
    backgroundColor: theme.accent1,
    color: "white",
    width: "auto",
    fontSize: 8
  },
  selected: {
    color: theme.accent1,
    fontSize: 5,
    marginBottom: 5
  },    
  input: { paddingVertical: 8, paddingHorizontal: 16, fontSize: 16, borderRadius: 4, marginTop: 10, backgroundColor: theme.grayLight, fontFamily: "Gantari-Bold", marginBottom: 16, elevation: 2, width: "100%" },

});

export default WithContext(InterestsPicker);
