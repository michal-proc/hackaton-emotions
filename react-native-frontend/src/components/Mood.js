import React from 'react'
import { StyleSheet, View } from 'react-native';
import Text from './../components/Text';
import theme from '../css/theme';

const moodRenderer = (mood) => {
    if (mood >= 0 && mood < 50)
        return <Text>😢 ({mood})</Text>;
    else if (mood >= 50 && mood < 100)
        return <Text>😔 ({mood})</Text>;
    else if (mood >= 100 && mood < 150)
        return <Text>😊 ({mood})</Text>; 
    else if (mood >= 150 && mood <= 200)
        return <Text>😍 ({mood})</Text>;
}

function Mood({thankful_for, mood, timestamp}) {
  return (
    <View style={style.row}>
        <Text style={style.date}>{timestamp}</Text>
        <Text>Samopoczucie: {moodRenderer(mood)}</Text>
        <Text>{thankful_for}</Text>
    </View>
  )
}

const style = StyleSheet.create({
    row: {
        backgroundColor: theme.grayLight,
        padding: 10,
        width: "100%",
        marginBottom: 5,
        borderRadius: 5
    },
    date: {
        color: theme.base2
    }
})

export default Mood