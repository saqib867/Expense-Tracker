import { Keyboard, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import {Ionicons} from '@expo/vector-icons'
import { useStateValue } from '../../contextApi/context'
import {addData, deleteExpense} from '../../contextApi/actions'
import ExpenseForm from '../ExpenseInputs/ExpenseForm'
import {deleteExp, sendData, updateExp} from '../../utils/axiosData'


const ManageExpenses = ({route,navigation}) => {

   const getScreen=route.params.screenType
   const expenseId=route.params.id
   const type=route.params?.type?.type
   const[loading,setLoading]=useState(false)
   
   const [{},dispatch]=useStateValue()
   const[val,setVal]=useState()
   const [inputValues,setInputValues]=useState()

const getType=()=>{
     
      if(type==='exp'){
         return 'Add Expenses'
      }
      if(type==='inc'){
        return 'Add Income'
      }
}
  
   useLayoutEffect(()=>{
   
            navigation.setOptions({  
              title:getScreen?getType():getType()
            })
           

    },[getScreen,navigation])  
   
  // useEffect(()=>{

  //   dispatch(getType(type)) 
  // },[type]) 

  const cancel =()=>{
        
       navigation.goBack()
  }  
  const confirmHandler =async()=>{
      
    setLoading(true)
      if(getScreen){
        // adding new record
       const expId= await sendData({...inputValues,type:type})
       dispatch(addData({...inputValues,id:expId,type:type}))
       navigation?.goBack()
       setLoading(false)
      }
      else{
        //updating existing record

        await updateExp(expenseId,inputValues)
        navigation.goBack()
        setLoading(false)
      }
       
  }
  const trash=(id)=>{
         
      //   dispatch(deleteExpense(id))
         deleteExp(id)
         setLoading(false)
         navigation.goBack()
  }

  return ( 
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      
        <View style={styles.update}>
          <View>
            <ExpenseForm setInputValue={setInputValues}/>
          </View>
          <View style={styles.buttons}>
            <Pressable onPress={cancel}>
                <Text style={styles.button}>Cancel</Text>  
            </Pressable>
            <Pressable style={(p)=>{p.pressed && styles.press}}
              onPress={confirmHandler}
             >
                <Text  style={[styles.button,styles.manageBtn]}>
                  {loading?'loading...': getScreen?"Add":'Update'}
                </Text>
            </Pressable>
          </View>
          <View style={styles.horizentle}></View>
          {!getScreen &&   
          <View>
               <Pressable onPress={()=>trash(expenseId)} >
                  <Ionicons name='trash-outline' size={30} color={'red'} />
               </Pressable> 
          </View>
          }
        </View>
      
    </TouchableWithoutFeedback>
  )
}

export default ManageExpenses

const styles = StyleSheet.create({

    update:{
        
         padding:25,
         display:'flex',
         flexDirection:'column',
         alignItems:'center',
         backgroundColor:'rgb(140, 190, 190)',
         height:'100%'
    },
   
    horizentle:{
         
          width:'100%',
          height:2,
          backgroundColor:'rgb(70,100,100)',
          elevation:4
    },
    buttons:{
        
         display:'flex',
         flexDirection:'row',
         alignItems:'center',
         marginHorizontal:10,
         fontWeight:'600'

    },
    button:{

         minWidth:100,
         marginHorizontal:15,
         textAlign:'center',
         fontSize:18,
         margin:5,
         padding:5,
         
    },
    manageBtn:{
        
         backgroundColor:'rgb(110, 160, 140)',

         display:'flex',
         flexDirection:'row',
         alignItems:'flex-end',
         borderRadius:2,
    },
    press:{

       opacity:0.6,
       backgroundColor:'blue'
    }
})