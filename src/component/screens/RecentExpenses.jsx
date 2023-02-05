import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ExpenseSummary from '../Expenses/ExpenseSummary'
import ExpensisList from '../Expenses/ExpensisList'
import Expenses from '../Expenses/Expenses'
import { useStateValue } from '../../contextApi/context'
import {get7DaysFromNow} from '../../utils/date'
import { getData } from '../../utils/axiosData'
import { receiveData } from '../../contextApi/actions'
import TotalIncome from '../TotalIncome/TotalIncome'

const RecentExpenses = () => {

   const [{list},dispatch]=useStateValue()
   const [recentExpense,setRecent]=useState()
   const fallbackText='No expense registered in last seven days'

   useEffect(()=>{
    const getBackData=async()=>{

     const dataBack=await getData()
     
      dispatch(receiveData(dataBack))
    }
    
    getBackData()

  },[])   
  


  
    const exp=list?.filter(expense=>{
    const currentDate=new Date()
    const date7DaysAgo=get7DaysFromNow(currentDate,7)
    return expense.date > date7DaysAgo && expense.type ==='exp'
 })


 
  return (
    <View style={styles.container}>
      <TotalIncome type={'exp'}/>
     <Expenses expense={exp} type='exp' expensePeroid={'Last seven days expenses'} fallbackText={fallbackText}/>
    </View>
  )
}

export default RecentExpenses

const styles = StyleSheet.create({
  container:{

    backgroundColor:'#BAD4AA',
    flex:1,
    
}
})