import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const FormInput = ({lable,inputConfig}) => {

const inputStyle=[styles.input]

if(inputConfig && inputConfig.multiline){

    inputStyle.push(styles.descriptionInput)
}

  return (
    <View style={styles.inputContainer} >
      <Text style={styles.lable}>{lable}</Text>
      <TextInput style={inputStyle} {...inputConfig}  />
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({

      inputContainer:{

           marginHorizontal:5,
           marginVertical:10,
           width:'100%'
      },
      lable:{

        fontSize:15,
        fontWeight:'600',
        color:'rgb(220,220,220)'
      },
      input:{

        backgroundColor:'rgb(215,235,245)',
        fontSize:15,
        borderRadius:3,
        minHeight:35,
        borderColor:'rgb(100,100,100)',
        borderWidth:1,
        paddingLeft:5,
        minWidth:'90%'
      },
      descriptionInput:{

        minHeight:100,
        textAlignVertical:'top'
      }
})