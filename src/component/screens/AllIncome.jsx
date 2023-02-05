import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Expenses from '../Expenses/Expenses'
import { useStateValue } from '../../contextApi/context'
import { receiveData } from '../../contextApi/actions'
import Loading from '../../UI/Loading'
import { getData } from '../../utils/axiosData'
import TotalIncome from '../TotalIncome/TotalIncome'

const AllIncome = () => {

  const [{list},dispatch]=useStateValue()
  const [isLoading,setIsLoading]=useState(false)
  const [expenseData,setExpenseData]=useState([])
  const fallbackText='No Income source yet'

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
  
 const income=list?.filter(inc=>{

        return inc.type ==='inc'
 })

  return (
    <>{isLoading?<Loading loadingColor={'#BAD4AA'} />:
    
    <View style={styles.income}>
      <TotalIncome type={'inc'}/>
       <Expenses expense={income} type={'inc'} expensePeroid={'Total Income'} /> 
    </View>
    }
    </>
  )
}

export default AllIncome

const styles = StyleSheet.create({

    income:{
      backgroundColor:'#BAD4AA',
      height:'100%' 
    }
})