import React from 'react'
import { View, StyleSheet } from 'react-native';
import NativeCheckbox from 'expo-checkbox';
import Text from './../components/Text';
import theme from '../css/theme';

function Checkbox({label, isChecked, onValueChange}) {
  return (
    <View style={style.row}>
        <Text>{label}</Text>
        <NativeCheckbox value={isChecked} onValueChange={onValueChange} color={isChecked ? theme.accent1 : undefined}/>
    </View>
  )
}

const style = StyleSheet.create({
    row: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        margin: 10
    }
})

export default Checkbox