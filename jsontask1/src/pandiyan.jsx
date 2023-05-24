import React, { Component } from "react";
import data from "./data";
import "./demo.css";

export class demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: data,
      number: 0,
      developer: true,
      tester: true,
      designer: true,
    };
  }


  updateValue(e){
    let value =e.target.value;
// console.log("value",value);
this.setState({
  number: value,
})
console.log( "after",this.state.number);
}

  render() {
    return (
      <>
        <div className="main">
          <div className="">
            <h1>Company Detail Json</h1>
            <div className="checkBoxDiv">
              <input
                type="checkbox"

              />
              developer
              <input
                type="checkbox"

              />
              Tester
              <input
                type="checkbox"

              />
              Designer
            </div>
            <div className="experience">
              <p>year of experience</p>

              <select
                id="experienceValue" onChange={(value)=>{this.updateValue(value)}}
                
              >
                <option value="0">select</option>
                <option value="0.8">0.8</option>
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                <option value="2.5">2.5</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4.5">4.5</option>
                <option value="7">7</option>
              </select>
            </div>
          </div>
          <div className="tableDiv">
            <table>
              <tr>
                <th>company Name</th>
                <th>Project</th>
                <th>Project Details</th>
                <th colSpan={4}>Members</th>
              </tr>

              {/* {Object.keys(this.state.product).map((ele) => {
                return (

                  <tr>
                    <td>{ele}</td>
                    <td>{this.state.product[ele].projectName}</td>
                    <td>
                      projectDuration is{this.state.product[ele].projectDuration}
                    </td>
                    {this.state.product[ele].members.map((element) =>
                      element.yearOfExperience == this.state.number ? (
                        <div className="tableMember">
                          <tr id="members">
                            <td >{element.name}</td>
                            <td>{element.yearOfExperience}</td>
                            <td>{element.position}</td>
                            <td className="memberData">{element.skills}</td>
                          </tr>
                        </div>
                      ) : (
                        <>
                        </>
                      ) */}
                    {/* )} */}
                  {/* </tr> */}
                {/* ) */}
              {/* })} */}
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default demo;


