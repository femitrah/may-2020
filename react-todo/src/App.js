import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input_value: "",
      total: "",
      count: 0,
      checked:false,
      newobj:[],

    }; 
  }
  keyPress = (e) => {
    if(e.target.value===""){
      return null;
    }
   else if (e.keyCode === 13) {
      this.setState({ input_value: "" });
      this.setState({
        newobj: [...this.state.newobj,{data:e.target.value,key:false,id:Date.now()}]
      });
    }
    console.log("chec",this.state.checked_values,e.target.value)
  };

  handleCheckCount = (e,eventcount) => {
    console.log("ec",eventcount,e.target.checked)
  let check = eventcount.key=e.target.checked
  console.log("e626c",check,eventcount,this.state.newobj)
  let counter=this.state.newobj.filter((ele)=>ele.key===true)
  console.log("counter",counter);
  this.setState({...this.state.newobj,check})
    this.setState({count:counter.length})

  };

  deleteItem = (liste) => {

    const array1 = this.state.newobj;
    // array1.name="checked"

    const arr = array1.filter((event) => event.id !== liste.id);
    console.log("lisSDFSDFte",liste) 
    let counter1=this.state.newobj.filter((ele)=>ele.key===true)
    console.log("c1",counter1)
    if(liste.key===true){
        this.setState({count:this.state.count-1});
    }
  
    this.setState({ newobj: arr })
  
  }
 render() {
  console.log("sdsd",this.state.newobj)
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
            <div className="displayList">
              <h1>TOTAL LIST:{this.state.newobj.length}</h1>
              <h1>COMPLETED LIST:{this.state.count}</h1>
              <h1>PENDING LIST:{this.state.newobj.length-this.state.count}</h1>
            </div>
            <h1 className="todoList">TODO LIST</h1>
            {this.state.newobj.map((event) => (
              <p className="checkList">
                {event.data}
                <input
                  type="checkbox"
                  checked={event.key}
                  onChange={(e) => this.handleCheckCount(e,event)}
                />
                <button onClick={() => this.deleteItem(event)}>Delete</button>
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default App;

