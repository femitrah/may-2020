import React from 'react'
import {  Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux'
import './App.css';
import StoreData from './component/component'
import thunk from 'redux-thunk';
import { addData } from './services/reducer';


const store = createStore(addData,applyMiddleware(thunk))
const App=()=>(
  <Provider store={store}>
    <StoreData />
    </Provider>
)
export default App;

