import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStateValue } from '../../contextApi/context'

const TotalIncome = ({type}) => {

    const [{list}]=useStateValue()
    let inc=0
    let exp=0
    list?.filter(expense=>{
           
          if(expense?.type === 'inc'){
               
              inc=(inc+parseFloat(expense?.price))
              
              return inc
          }
          if(expense?.type === 'exp'){

              exp=exp+parseFloat(expense?.price)
              return exp
          } 
    })

  return (
    <View style={styles.totalIncome}>
             <Text>Balance in Bank</Text>
             <Text>${inc-exp}</Text>
    </View>
  )
}

export default TotalIncome

const styles = StyleSheet.create({

       totalIncome:{
           
            backgroundColor:'rgb(220,190,136 )',
            marginHorizontal:10,
            marginTop:10,
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            padding:10,
            borderRadius:5
       }
})