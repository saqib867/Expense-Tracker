
 export function get7DaysFromNow(currentDate,days){

         return new Date(currentDate?.getFullYear(),currentDate?.getMonth(),currentDate?.getDate()-days)
 }

 export function formateDate(date){
       
          return(`${date?.getFullYear()}-${date?.getMonth()+1}-${date?.getDate()}`)
 }