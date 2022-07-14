import { doIncrement,doDecrement } from '../services/Action creater'
import React, { Component } from 'react';
import { connect } from 'react-redux';
class Count extends Component {
    render() {
      return <div className="App">
        <div className="App-title">Using redux-thunk for Async actions</div>
        <div className="App-count">{this.props.count}</div>
        <button className="App-btn" onClick={() => this.props.doIncrement('hi')}>
          INCREMENT
        </button>
        <button className="App-btn" onClick={this.props.doDecrement}>
          DECREMENT
        </button>
      </div>
    }
  }
  export const Con = connect(
    state => ({ count: state.count }),
    { doIncrement, doDecrement }
  )(Count);