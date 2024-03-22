import React, { useEffect, useState } from 'react'
import { Pressable, View, ScrollView } from 'react-native';
import WithLayout from "../../hoc/WithLayout";
import WithContext from "../../hoc/WithContext";
import Text from '../../components/Text';
import { styles } from './Profile.styles';
import { FontAwesome5 } from '@expo/vector-icons';
import Input from '../../components/Input';
import BottomBar from '../../components/BottomBar';
import { Image } from "expo-image";
import { Button } from '../../components/Button';
import apiRoute from '../../api/apiConfig';
import InterestsPicker from '../../components/InterestsPicker';
import theme from '../../css/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';

function Profile({state, dispatch}) {
  const navigation = useNavigation();
  const [ editing, setEditing ] = useState(false);
  const changeUserField = (field, value) => {
    dispatch({type: 'EDIT_USER_FIELD', payload: { field: field, value: value }});
  }
  const postUserData = async () => {
    const response = await fetch(apiRoute('/user/' + state.user.id), {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state.user)
    });
    const json = await response.json();
    setEditing(false)
  }
  const fields = [
    {
      field: 'first_name',
      placeholder: 'Imię'
    }, 
    {
      field: 'last_name',
      placeholder: 'Nazwisko'
    },
    {
      field: 'username',
      placeholder: 'Nick'
    }, 
    {
      field: 'email',
      placeholder: 'E-mail'
    }, 
    {
      field: 'description',
      placeholder: 'Opis'
    }, 
    {
      field: 'age',
      placeholder: 'Wiek'
    }
  ];

  const logout = () => {
    AsyncStorage.removeItem('UserToken');
    navigation.navigate("Home");
    dispatch({type: 'SET_USER', payload: []})
  }

  return (
    <View style={{flex: 1, width: "100%", height: "100%", alignItems: "center"}}>
      { !editing ? <Pressable onPress={() => setEditing(!editing)} style={styles.editPressable}>
          <FontAwesome5 name="edit" style={styles.editProfile} />
        </Pressable> : null}
      { state.user ? <ScrollView style={{flex: 1, width: "70%"}} contentContainerStyle={{height: "100%", justifyContent: "center", alignItems: "center"}}>
          <View style={styles.avatar}>
            <Image source="https://picsum.photos/200/300" contentFit="cover" style={{width: "100%", height: "100%"}}/>
          </View>
          { fields.map((field, j) => (
            editing ? <Input key={j} value={state.user[field.field]} placeholder={field.placeholder} onChange={(text) => changeUserField(field.field, text)} style={{width: "100%"}}/> : <Text type='bold' key={j} style={styles.userField}>{field.placeholder}: <Text></Text>
              {state.user[field.field]}
            </Text>
          ))}

          { editing ? <InterestsPicker/> : (state.user.user_interests ? <View style={{marginTop: 5}}><Text type='bold' style={{color: 'black'}}>Zainteresowania:</Text><View style={{justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap'}}>{state.user.user_interests.map((single, j) => (<Text type='bold' style={{color: "black", backgroundColor: theme.accent1, paddingVertical: 5, paddingHorizontal: 10, margin: 5, borderRadius: 15}} key={j}>{single}</Text>))}</View></View> : null)}

          { editing ? <Button onClick={postUserData}>Zapisz</Button> : null}

          <Button onClick={logout} styleProp={{margin: 5}}>Wyloguj się</Button>
        </ScrollView> : <Text>Loading...</Text>}
        <BottomBar/>
    </View>
  )
}

export default WithLayout(WithContext(Profile))