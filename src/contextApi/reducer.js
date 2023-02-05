
export const initialState={

    list:[{}],
    type:''
}

export default function reducer(state,action){

         
         switch(action.type){
 
            case 'RECEIVE':
            
                return {...state,list:action.payload}
            case 'ADD':

                    state.list.push(action.payload)    
                    return {...state,list:state?.list}
            case 'TYPE':
                
                  return {...state,type:action.payload}
            default:
                
                return state
         }
}