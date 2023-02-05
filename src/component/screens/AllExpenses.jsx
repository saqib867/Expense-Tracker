import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Expenses from '../Expenses/Expenses'

import { useStateValue } from '../../contextApi/context'
import { getData } from '../../utils/axiosData'
import { receiveData } from '../../contextApi/actions'
import Loading from '../../UI/Loading'
import TotalIncome from '../TotalIncome/TotalIncome'

const AllExpenses = () => {

   const [{list},dispatch]=useStateValue()
   const fallbackText='No expense registered'
   const [expenseData,setExpenseData]=useState([])
   const [isLoading,setIsLoading]=useState(false)
  
   useEffect(()=>{

       const getBackData=async()=>{
       setIsLoading(true)
       const dataBack=await getData()
       setExpenseData(dataBack)
       dispatch(receiveData(dataBack))
       setIsLoading(false)
     }
     
     getBackData()

   },[])

  const getExp=list?.filter((item)=>{
  
    return item?.type === 'exp'
})
         
  return (
    <>{ isLoading?<Loading loadingColor={'#BAD4AA'}/>:
    <View style={styles.container}>
      <TotalIncome type={'exp'} />
      <Expenses expense={getExp} type={'exp'} expensePeroid={'Total Expense'} fallbackText={fallbackText} />
    </View>
    }</>
  )
}

export default AllExpenses

const styles = StyleSheet.create({
  container:{

    backgroundColor:'#BAD4AA',
    flex:1,
    
    
}
})