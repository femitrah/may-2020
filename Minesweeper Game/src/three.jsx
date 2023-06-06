import "./three.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef, useState } from "react";
// import data from "./data/data";
import dataThree from './data/dataThree';

function Three() {
 const  win = "<<<win 🏆>>>" 
const loss = "<<<Game Over>>>"
  const [one, setOne] = useState(1);
  const [two, setTwo] = useState("col");
  const [three, setThree] = useState();
  const [four, setFour] = useState("col");
  const [over, setOver] = useState("");
  const [play, setPlay] = useState(true);
  const [view, setView] = useState(Math.floor(Math.random() * dataThree.length));
  const [timer, setTimer] = useState("00:00:00");
  // const [indata, setData] = useState(data)
  console.log("setView {}1",view);
  const [playButton, setPlayButton] = useState("play");
  const Ref = useRef(null);
  let obj = {};
  // const aa=dataThree.map((x)=>{

  // }) 


  console.log("Object", Object.keys(dataThree))

  // console.log("aa",aa);
  // console.log("aa",aa);
  const mapedData1 = dataThree;
  // Object.keys(dataThree[Math.floor(Math.random() * 4)])
  console.log("mapedData", mapedData1[0].data);
  // console.log("mapedData1",dataThree[Math.floor(Math.random() * 4)]);


  console.log("dataThree", mapedData1.length);

  // ---------------------------------------------------

  const abc = dataThree;

  // console.log("dataaaaaaaa", Math.floor(Math.random() * 4));

  var seconds = 0;

  console.log("setTimer", timer);
  function upTimer() {
    ++seconds;
    var hour = Math.floor(seconds / 3600);
    var minute = Math.floor((seconds - hour * 3600) / 60);
    var updSecond = seconds - (hour * 3600 + minute * 60);
    setTimer(`${hour} : ${minute} : ${updSecond}`);
  }

  const Card = (id, value, check) => { 
    const first = abc.map((e) => {
      if (value !== "💣" && check) {
        setOne(one + 1)
        console.log("first", dataThree.length , one);
      }
      else {
        gameOver()
      }
    })
  }
 const  clear =()=>{
  setOver("");
  setOne(1);
  setPlayButton("play");

  setView(Math.floor(Math.random() * 4));
  console.log("setView {}",view);
mapedData1[view].data.map((e) => {
      e.check = false
    })
 }

  const rePlay = () => {
    const a = Math.floor(Math.random() * dataThree.length)
    console.log("a",a);
setView(a)
    setOver("");
    setOne(1)
    setPlayButton("play")

    mapedData1[view].data.map((e) => {
      e.check = false
    })
  }
  const gameOver = () => {
    setOver(loss);
    mapedData1[view].data.map((e) => {
      e.check = true
    })

    setPlayButton("replay");
  };
  return (
    <>
      <div className="main-container">
        <h1 className="text-center text-danger mt-5 fw-bold ">
          Minesweeper Game in React
        </h1>
        <div className="main ">
          <div className="container title-score mt-5">
            <samp>
              <button className="btn outline" onClick={()=>clear()}>🚩</button>
            </samp>
            <samp>
              Timer:<b>{timer}</b>
            </samp>
          </div>
          <div className="game">
            {/* <h1>{two}</h1> */}
            <div className="row" id="board">
              {/* ------------------------------------------------------------- */}
              {
                mapedData1[view].data.map((x) => {
                  return (
                    <div key={x.id}
                      className={x.check === false ? "col" :  `${two} col-view`}
                      onClick={timer === "00:00:00" || over === win   ? () => { } : () => Card(x.id, x.value, x.check = true,)}
                    >
                      <span >{x.value}</span>
                    </div>
                  );

                })}
            </div>
            <button
              className={`${timer !== "00:00:00" && over !== loss  ? "btn btnstart " : "btn" || over === win ? "btn " : " btnstart"} btn-success mt-3`}
              onClick={playButton === "play" ? () => play ? `${setInterval(upTimer, 1000)} }` : playButton === "replay"? "":""   : () => rePlay()
              } >
              <b>{playButton}</b>
            </button>
            <h2 className={`${over === loss ? "text-danger" : " text-success"}  fw-bold`}>{over}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Three;
