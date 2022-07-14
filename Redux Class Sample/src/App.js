import React from 'react'
import {  Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux'
import './App.css';
import {Con} from './components/componentone'
import thunk from 'redux-thunk';
import {Counter} from './services/reducer'

const store = createStore(Counter, applyMiddleware(thunk))
const App=()=>(
  <Provider store={store}>
    <Con />
    </Provider>
)
export default App;
