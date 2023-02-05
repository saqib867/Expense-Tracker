import React from 'react'
import { ActivityIndicator, View } from 'react-native'

function Loading({loadingColor}) {
  return (
    <View>
        <ActivityIndicator size={'large'} color={'white'} 
        style={{backgroundColor:loadingColor,height:'100%'}}/>
    </View>
  )
}

export default Loading