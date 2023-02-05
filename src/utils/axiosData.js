import axios from "axios"

const basicUrl='https://react-native-expense-23007-default-rtdb.firebaseio.com'
export  async function sendData(data){

       const expId=await axios.post(`${basicUrl}/expenses.json`,data)
       return expId.data.name
 }

export async function getData(){

    
       const getAxiosData=await axios.get(`${basicUrl}/expenses.json`)
        
       const expenseList=[]

       for(let key in getAxiosData.data){

            const expenseObj={
                  
                  id:key,
                  price:getAxiosData.data[key].price,
                  date:new Date(getAxiosData.data[key].date),
                  description:getAxiosData.data[key].description,
                  type:getAxiosData.data[key].type
            }
            expenseList.push(expenseObj)
           
       }
    return expenseList
}

export function  deleteExp(id){
       
       axios.delete(`${basicUrl}/expenses/${id}.json`)
         
}
export function updateExp(id,data){
     
       return axios.put(`${basicUrl}/expenses/${id}.json`,data)
}