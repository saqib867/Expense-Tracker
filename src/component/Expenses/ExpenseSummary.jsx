import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExpenseSummary = ({peroid,totalPrice}) => {
      
    const summation=totalPrice?.reduce((sum,value)=>{
        return sum+parseFloat(value.price)
    },0) 

  return (
    <View style={styles.summary}>
        <Text>{peroid}</Text>
        <Text>${summation?.toFixed(2)}</Text>
      </View>
  )
}

export default ExpenseSummary

const styles = StyleSheet.create({
    summary:{

        backgroundColor:'rgb(220,210,146 )',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:40,
        borderRadius:5,
        padding:10
   }
})