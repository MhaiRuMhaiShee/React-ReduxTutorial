import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, combineReducers,applyMiddleware} from "redux";
import {Provider} from "react-redux";

const initialState={
  result:15000,
  value:[]
}

const userReducer=(state={name:"pichet from store",age:13},action)=>{
  switch (action.type){
    case "setName":
        state={
            ...state,
            name:action.payload
        }
    break;
    case "setAge":
        state={
          ...state,
          age:action.payload
        }
    break;
    default:
  }
  return state;
}

const employeeReducer=(state=initialState,action)=>{
  switch (action.type){
    case "ADD":
        state={
            ...state,
            result:state.result+=action.payload,
            value:[...state.value,action.payload]
        }
    break;
    case "SUBTRACT":
        state={
          ...state,
          result:state.result-=action.payload,
          value:[...state.value,action.payload]
        }
    break;
    default:
  }
  return state;
}
const mylogger=(store)=>(next)=>(action)=>{
  console.log("log Action",action);
  next(action);
}

const store=createStore(combineReducers({emp:employeeReducer,user:userReducer}),{},applyMiddleware(mylogger))
  store.subscribe(()=>{
    console.log("Update Store:",store.getState());
 
})


ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);