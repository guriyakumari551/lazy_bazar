
export const initialState=
{
  basket:[],
  user:null,

};








export const getBasketTotal=(basket)=>
basket?.reduce((amount,item)=>item.price+amount,0);


function reducer(state,action)
{
 console.log(action);   
   
    switch(action.type)
   {
       case "SET_USER":
           return(
               {
                   
               ...state,
               user:action.user,

           }
           );
          
       case "ADD_TO_BASKET":
           return(
           
               {
                   ...state,
                   
           basket: [...state.basket,action.item],
               }
           );
         
     
           
           
        //    LOGIC TO ADDING THE ITEAMS IN TO BASKET 
       
        case "REMOVE_FROM_BASKET":

           //removing the items from the basket
           //it will clone the current state of the basket
           let newBasket= [...state.basket];
           //it means we can match the basketitem with the newbasketindexitem
           const index=state.basket.findIndex((basketitem)=>basketitem.id===action.id);
           if(index>=0)
           {
               //it means item exist in the basket simply remove that item
               //it means we are finding the object at current index
               newBasket.splice(index,1);
           }
           else{
               //this is the red console to show the format
               console.warn(`Cant remove product(id:${action.id}) as its not availabe writenow.`);
           }
           return{...state,basket:newBasket};
          
              
            
        // LOGIC TO REMOVE THE ITEAMS FROM THE BASKET
        
        default:
            return state;

    }

}
export default reducer;