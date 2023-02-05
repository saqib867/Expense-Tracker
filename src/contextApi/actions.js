export function setData(data){

      const action={
            type:'SET',
            payload:data
      }

      return action
}


export function addData(data){

       const action={

              type:'ADD',
              payload:data
       }
       return action
}

export function receiveData(data){

       const action={

             type:'RECEIVE',
             payload:data
       }
       return action
}

 export function deleteExpense(id){

         const action={

             type:'DELETE',
             payload:id
         }
         return action
   }

export function updateExpense(id){

         const action={

            type:'UPDATE',
            payload:id
         }

         return action
}  

export function geTypeOf(str){

       const action={

            type:'TYPE',
            payload:str
       }

       return action
}