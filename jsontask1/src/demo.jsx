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

  UpdatePosition(value, positionkey) {
    let valuee = value.target.checked;
    this.setState(
      {
        [positionkey]: valuee,

      },
      () => {
        this.updatejson(this.state);
      }
    );
  }

  updatejson = (currentState) => {
    console.log(currentState);
    let array = {};
    Object.keys(data).forEach((ele) => {
      {console.log("data[ele]",{...data[ele]})}
      console.log("ele",ele);
      array = {

        ...array, [ele]: {
          ...data[ele], members: data[ele].members

            .filter((dataelement) => {
              if (this.state.developer && dataelement.position.includes("developer")) {
                return true;
              }
              else if (this.state.tester && dataelement.position.includes("tester")) {
                return true;
              } else if (this.state.designer && dataelement.position.includes("designer")) {
                return true;
              }
              else {
                return false;
              }

            }),
        },
      };
    });
    this.setState({
      product: array
    })

  };
  updateState(e) {
    let value = e.target.value;
    let aa = Object.keys(this.state.product).map((ele) => {
      console.log("aaaaaa", this.state.product[ele].members);
      this.state.product[ele].members.filter((filterelement) => {
        if (this.state.number == 0) {

        }
        console.log("filterelement,", filterelement.yearOfExperience);

      })
    })
    this.setState({
      number: value,
    });
    console.log("aa", aa);
    console.log("value", value);
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
                onChange={(value) => this.UpdatePosition(value, "developer")}
                checked={this.state.developer}
              />
              developer
              <input
                type="checkbox"
                onChange={(value) => this.UpdatePosition(value, "tester")}
                checked={this.state.tester}
              />
              Tester
              <input
                type="checkbox"
                onChange={(value) => this.UpdatePosition(value, "designer")}
                checked={this.state.designer}
              />
              Designer
            </div>
            <div className="experience">
              <p>year of experience</p>

              <select
                id="experienceValue"
                onChange={(e) => this.updateState(e)}
              >
                <option value="-1">select</option>
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

              {Object.keys(this.state.product).map((ele) => {
                return (

                  <tr>
                    <td>{ele}</td>
                    <td>{this.state.product[ele].projectName}</td>
                    <td>
                      projectDuration is{this.state.product[ele].projectDuration}
                    </td>
                    {this.state.product[ele].members.map((element) =>


                      this.state.number == 0 ? (

                        <div className="tableMember">
                          <tr id="members">
                      
                            <td >{element.name}</td>
                            <td>{element.yearOfExperience}</td>
                            <td>{element.position}</td>
                            <td className="memberData">{element.skills}</td>
                          </tr>
                        </div>
                      ) : (
                        element.yearOfExperience == this.state.number ? (
                          console.log("element", element),
                          <div className="tableMember">
                            <tr id="members">
                              <td >{element.name}</td>
                              <td>{element.yearOfExperience}</td>
                              <td>{element.position}</td>
                              <td className="memberData"></td>
                            </tr>
                          </div>) : <></>



                      )
                    )}
                  </tr>
                )
              })}
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default demo;

