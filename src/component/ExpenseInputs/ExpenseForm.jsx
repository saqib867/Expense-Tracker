import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import FormInput from './FormInput'

const ExpenseForm = ({setInputValue}) => {

const [inputValue,sInputValue]=useState({

  price:'',
  date:'',
  description:'',

})

 const inputHandler=(inputIdentifier,inputText)=>{

          
          sInputValue((currentInput)=>{
           
          return {
            ...currentInput,
            [inputIdentifier]:inputText
        }
          })
         setInputValue(inputValue)      
 }
 

  return (
    <View onPres>
      <FormInput lable={'Amount'} inputConfig={{
        keyboardType:'decimal-pad',
        cursorColor:'black',
        placeholder:'Amount',
        onChangeText:(e)=>inputHandler('price',e) 
      }} />
      <FormInput lable={'Date'} inputConfig={{
          placeholder:'YYYY-MM-DD',
          maxLength:10,
          keyboardType:'decimal-pad',
          cursorColor:'black',
          onChangeText:(e)=>inputHandler('date',e) 
      }}/>
      <FormInput lable={'Description'} inputConfig={{
          placeholder:'Expense description...',
          multiline:true,
          cursorColor:'black',
          onChangeText:(e)=>inputHandler('description',e) 
      }}/>
    </View>
  )
}

export default ExpenseForm

const styles = StyleSheet.create({})