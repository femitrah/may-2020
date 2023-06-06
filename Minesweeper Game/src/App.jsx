import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import dataOne from './data/dataOne.js';
import dataFive from './data/dataFive'
import dataThree from './data/dataThree'

function App() {
  const win = "win 🏆";
  const loss = "<<<Game Over>>>";
  const [one, setOne] = useState(1);
  const [two, setTwo] = useState("col");
  const [level, setLevel] = useState(dataOne);
  const [text, setText] = useState("easy");
  const [over, setOver] = useState("");
  const [play, setPlay] = useState(true);
  const [view, setView] = useState(Math.floor(Math.random() * level.length));
  const [timer, setTimer] = useState("00:00:00");
  const [playButton, setPlayButton] = useState("play");
  const [flag, setFlag] = useState(false);
  const [timeRed, setTimeRed] = useState(1000);
  const [dataArray, setDataArray] = useState([]);

  var seconds = 0;

  function upTimer() {
    ++seconds;
    var hour = Math.floor(seconds / 3600);
    var minute = Math.floor((seconds - hour * 3600) / 60);
    var updSecond = seconds - (hour * 3600 + minute * 60);
    setTimer(`${hour} : ${minute} : ${updSecond}`);
  }

  const mapedData = level;
  const gameLevel = (e) => {
    setOver("");
    setDataArray([])
    let value = e.target.value;
    if (value === "midium") {
      setText("midium")
      setLevel(dataThree)
    }
    else if (value === "hard") {
      setText("hard")
      setLevel(dataFive)
    }
    else {
      setText("easy")
      setLevel(dataOne)
    }
  }

  let array = []

  const Card = (id, value, check) => {
    let datalen = mapedData[view].data.filter((x) => {
      return x.value === "💣";
    })
    let e = mapedData[view].data.filter((x) => { //e contains hole length
      return x;
    })

    if (dataArray.includes(id) === false && value !== "💣") {
      array.push(id)
      let add = [...dataArray, ...array]
      setDataArray(add)
      if (e.length - datalen.length === add.length) {
        setOver(win)
      }
    }
    else if (value === "💣") {
      gameOver()
    }
    else {
      setDataArray(dataArray)
    }
  }

  const clear = () => {
    setOver("");
    setOne(1);
    setPlayButton("play");
    setView(Math.floor(Math.random() * level.length));
    mapedData[view].data.map((e) => {
      e.check = false
    })
  }

  const rePlay = () => {
    setView(Math.floor(Math.random() * level.length))
    setOver("");
    setOne(1)
    setPlayButton("play")
    mapedData[view].data.map((e) => e.check = false)
    setDataArray([])
  }

  const gameOver = () => {
    setOver(loss);
    setDataArray([])
    mapedData[view].data.map((e) => e.check = true)
    setPlayButton("replay");
  };

  return (
    <>
      <div className="main-container">
        <h1 className="text-center text-danger mt-5 fw-bold ">Minesweeper Game in React</h1>
        <div className="main ">
          <div className="container title-score mt-5">
            <span>
              <select name="" id="" onChange={(e) => gameLevel(e)}>
                <option value="easy">Easy</option>
                <option value="midium">Midium</option>
                <option value="hard">Hard</option>
              </select>
              <button className="btn outline" onClick={() => clear()}>🚩</button>
            </span>
            <samp>Timer:<b>{timer}</b></samp>
          </div>
          <div className="game">
            <div className={`${text === "midium" ? "row  rowThree" : text === "hard" ? "row  rowFive" : " row"}`} id="board">
              {
                mapedData[view].data.map((x) => {
                  return (
                    <div key={x.id} className={x.check === false ? "col" : `${two} col-view`}
                      onClick={flag === false || over === win ? () => { } : () => Card(x.id, x.value, x.check = true,)}  >
                      <span >{x.value}</span>
                    </div>
                  );

                })}
            </div>
            <button className={`${timer !== "00:00:00" && over !== loss ? "btn btnstart " : "btn" || over === win ? "btn " : " btnstart"} btn-success mt-3`}
              onClick={playButton === "play" ? () => play ? `{${setInterval(upTimer, timeRed)} ${setFlag(true)}}` : playButton === "replay" ? "" : "" : () => rePlay()} >
              <b>{playButton}</b>
            </button>
            <h2 className={`${over === loss ? "text-danger" : " text-success"}  fw-bold`}>{over}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
