import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const AddIconBtn = (type) => {

  const navigation=useNavigation()

   const addExpense=()=>{

         navigation.navigate('Manage',{

            screenType:true,
            type:type
         })
   }

  return (
   <Pressable style={({pressed})=>pressed && styles.afterPress}
    onPress={addExpense}
   >
    <View style={styles.addIcon}>
      <Ionicons name='add' size={24} />
    </View>
    </Pressable>
  )
}

export default AddIconBtn

const styles = StyleSheet.create({

      afterPress:{
          
           opacity:0.4,
           
      },
      addIcon:{
          
            padding:10,
            marginHorizontal:8
      }
})