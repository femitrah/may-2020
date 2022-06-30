import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input_value: "",
      checked_values: [],
    };
  }

  keyPress = (e) => {
    if (e.keyCode === 13) {
      this.setState({ input_value: "" });
      this.setState({
        checked_values: [...this.state.checked_values, e.target.value]
      });

    }
  };

  render() {
    return (
      <div className="App">
        <div className="todoItems">
          <label>Enter the todo list:</label>
          <input
            type="text"
            value={this.state.input_value}
            onKeyDown={this.keyPress}
            onChange={(e) => {
              this.setState({ input_value: e.target.value });
            }}
          />

          <div>
            <h1 className="todoList">TODO LIST</h1>

            {this.state.checked_values.map((e) => (
              <p className="checkList">
                {e}
              <input type="checkbox"/>
              <button>Delete</button>
              
              </p> 
         
            ))}
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
