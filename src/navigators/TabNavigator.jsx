import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AllExpenses from '../component/screens/AllExpenses'
import RecentExpenses from '../component/screens/RecentExpenses'
import {Ionicons} from '@expo/vector-icons'
import AddIconBtn from '../UI/AddIconBtn'
import AllIncome from '../component/screens/AllIncome'


const TabNavigator = () => {

    const Tab=createBottomTabNavigator()
  return (
      <Tab.Navigator screenOptions={{
         headerStyle:{backgroundColor:'rgb(220,240,156 )'},
          tabBarActiveTintColor:'blue',
          tabBarInactiveTintColor:'rgb(100,100,100)',
          tabBarStyle:{backgroundColor:'rgb(220,240,156 )',},
          
         }} >
        <Tab.Screen  name='AllExpenses' component={AllExpenses} options={{
          headerTitle:'All Expenses',
          title:'All Exp',
          
          headerRight:({})=><AddIconBtn type={'exp'}  />,
          tabBarIcon:({color,size})=>{return <Ionicons name='hourglass-outline' color={color} size={size} />}
          }} />
        <Tab.Screen  name='Recent' component={RecentExpenses} options={{
          headerTitle:'Recent Expenses',
          title:'Recent Exp',
          
          headerRight:({})=><AddIconBtn type={'exp'}  />,
          tabBarIcon:({color,size})=>{return <Ionicons name='calendar-outline' color={color} size={size} />}
        }}/>
        <Tab.Screen component={AllIncome}
        
         name='Income' options={{
           tabBarIcon:({color,size})=>{return <Ionicons name='add-circle' color={color} size={size} />},

           headerRight:({})=><AddIconBtn type={'inc'}  />

           }}/>
      </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})