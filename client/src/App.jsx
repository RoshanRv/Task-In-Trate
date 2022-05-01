import Pomodoro from "./components/Pomodoro";
import Matrix from "./components/Matrix/Matrix";
import SchulteTable from "./components/SchulteTable/SchulteTable";
import ColourFool from "./components/ColourFool/ColourFool";
import CodeBreaker from './components/CodeBreaker/CodeBreaker'
import Wordzle from "./components/Wordzle/Wordzle";
import Trials from "./components/LetterTrails/Trials";
import Sudoku from "./components/Sudoku/Sudoku"
import Home from "./Home";
import Header from "./components/Header";
import Caffine from "./components/Caffine/Caffine";
import Match from "./components/MatchGame/Match";
import Frog from "./components/Frog/Frog";
import FiveMin from "./components/FiveMin/FiveMin";
import Player from "./components/Player/Player";
import Excercies from "./components/Excercies/Excercies";
import Routine from "./components/Routine/Routine";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { useState } from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Context from "./components/Context";




function App() {

  const [showSong,setShowSong]=useState(false)

  return (
    <Router>
      <Context>
      <Header />
      <Player showSong={showSong} setShowSong={setShowSong}/>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home showSong={showSong} setShowSong={setShowSong}/>}/>
            <Route path="/pomodoro" element={<Pomodoro />}/>
            <Route path="/matrix" element={<Matrix />}/>
            <Route path="/codebreaker" element={<CodeBreaker />}/>
            <Route path="/wordzle" element={<Wordzle />}/>
            <Route path="/trials" element={< Trials />}/>
            <Route path="/sudoku" element={<Sudoku />}/>
            <Route path="/schultetable" element={<SchulteTable />}/>
            <Route path="/colourfool" element={<ColourFool />}/>
            <Route path="/caffinenap" element={<Caffine />}/>
            <Route path="/frog" element={<Frog />}/>
            <Route path="/five" element={<FiveMin />}/>
            <Route path="/excercises" element={<Excercies />}/>
            <Route path="/routines" element={<Routine />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>

            {/* <Route path="/match" element={<Match />}/> */}

          </Routes>
      </div>
      </Context>
    </Router>

  );
}

export default App;
