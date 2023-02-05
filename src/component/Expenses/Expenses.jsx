import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ExpensisList from './ExpensisList';
import ExpenseSummary from './ExpenseSummary';
import { useRoute } from '@react-navigation/native';
import { useStateValue } from '../../contextApi/context';


const Expenses = ({expense,expensePeroid,fallbackText,type}) => {

let content=<Text style={styles.textStyle}>{fallbackText}</Text>

if(expense?.length>0){

   content=<ExpensisList expense={expense} type={type}/>
}


  return (
    <View style={styles.container}>
      
        <ExpenseSummary totalPrice={expense} peroid={expensePeroid}/>
        {content}  
      
    </View>
  )
}

export default Expenses

const styles = StyleSheet.create({

       container:{
              
             margin:20,
             paddingBottom:20,
             flex:1
       },
       textStyle:{
           
            margin:'7%',
            fontSize:15
            
       }

})