import React from 'react'
import WithLayout from '../hoc/WithLayout'
import { View } from 'react-native'
import Text from './../components/Text';

function Chat() {
  return (
    <View>
        <Text>Chat</Text>
    </View>
  )
}

export default WithLayout(Chat)