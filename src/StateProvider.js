//setup dataplayer

import { createContext,useContext, useReducer } from "react";

//we need to track basket
//this is the data layer
export const StateContext=createContext();
//this is a provider
export const StateProvider=({reducer,initialState,children})=>
(
<StateContext.Provider value={useReducer(reducer,initialState)}>
{children}
</StateContext.Provider>
);
export const  useStatevalue =() => useContext(StateContext);

