import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator'
import ManageExpense from '../component/screens/ManageExpenses'


const StackNavigator = () => {

    const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen  name='Expenses' component={TabNavigator} />
            <Stack.Screen  name='Manage' component={ManageExpense} 
            options={{headerShown:true,presentation:'modal',title:'Manage Expense',
            headerStyle:{backgroundColor:'rgb(100, 179, 170)'},}} />
         </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})