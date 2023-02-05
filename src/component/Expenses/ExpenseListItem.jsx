import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { formateDate } from '../../utils/date'
import { useStateValue } from '../../contextApi/context'
import {deleteExpense} from '../../contextApi/actions'

const ExpenseListItem = ({expenseItem}) => {

    const navigation=useNavigation() 
   

    const manageExpense=(id)=>{

        navigation.navigate('Manage',{

              screenType:false,
              id:id
        })
  }
  return (
    
    <Pressable  style={({pressed})=>pressed && styles.afterPress}
     onPress={()=>manageExpense(expenseItem.id)}
    >{expenseItem.id &&
     <View style={styles.container}>
       <View>
        <Text>{expenseItem.description}</Text>
        <Text>{formateDate(new Date(expenseItem.date))}</Text>
       </View>
       <View>
        <Text style={styles.price}>${expenseItem.price}</Text>
        </View>
     </View>
     }
    </Pressable>
  )
}

export default ExpenseListItem

const styles = StyleSheet.create({

    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:10,
        padding:10,
        
        backgroundColor:'rgb(220,240,186 )',
        borderRadius:5

     },
     afterPress:{
         opacity:0.8,
     },

     price:{
           
          backgroundColor:'rgb(220,220,100 )',
          padding:8,
          borderRadius:3
     }
})