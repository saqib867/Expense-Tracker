import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ExpenseListItem from './ExpenseListItem'
import { useStateValue } from '../../contextApi/context'

const ExpensisList = ({expense,type}) => {

return (
 <View>
    
      
        <FlatList
        data={expense}
        renderItem={({item})=>{
            return(<ExpenseListItem expenseItem={item} />)
        }}
        />
     
  </View>
  )
}

export default ExpensisList

const styles = StyleSheet.create({

      
})