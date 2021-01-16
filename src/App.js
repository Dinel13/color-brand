import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./page/home";
import Pertanyaan1 from "./page/pertanyaan1";
import Pertanyaan2 from "./page/pertanyaan2";
import Pertanyaan3 from "./page/pertanyaan3";
import Pertanyaan4 from "./page/pertanyaan4";
import Pertanyaan5 from "./page/pertanyaan5";
import Pertanyaan6 from "./page/pertanyaan6";
import Pertanyaan7 from "./page/pertanyaan7";
import Pertanyaan8 from "./page/pertanyaan8";
import Pertanyaan9 from "./page/pertanyaan9";
import Pertanyaan10 from "./page/pertanyaan10";
import Pertanyaan11 from "./page/pertanyaan11";
import Pertanyaan12 from "./page/pertanyaan12";
import Pertanyaan13 from "./page/pertanyaan13";
import Hasil from "./page/hasil";
import Footer from "./components/Footer/footer";
import Header from "./components/header/header";
import "./App.css";
import Penjelasan from "./page/penjelasan";
import {INTRO} from './Data/intro'

function App() {
  const [name, setName] = useState("");
  const [gold, setGold] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);
  const [orange, setOrange] = useState(0);

  return (
    <Router className="container">
      <Header />
      <div className="app">        
        <Switch>
          <Route path="/" exact>
            <Home nama={name} setName={setName} />
          </Route>
          <Route path="/penjelasan" exact>
            <Penjelasan />
          </Route>
          <Route path="/pertanyaan1" exact>
            <Pertanyaan1
              gold={gold}
              blue={blue}
              green={green}
              orange={orange}
              setGold={setGold}
              setBlue={setBlue}
              setGreen={setGreen}
              setOrange={setOrange}
            />
          </Route>
          <Route path="/pertanyaan2" exact>
            <Pertanyaan2
              gold={gold}
              blue={blue}
              green={green}
              orange={orange}
              setGold={setGold}
              setBlue={setBlue}
              setGreen={setGreen}
              setOrange={setOrange}
              intro={INTRO}
            />
          </Route>
          <Route path="/pertanyaan3" exact>
            <Pertanyaan3
              gold={gold}
              blue={blue}
              green={green}
              orange={orange}
              setGold={setGold}
              setBlue={setBlue}
              setGreen={setGreen}
              setOrange={setOrange}
              intro={INTRO}
            />
          </Route>
          <Route path="/pertanyaan4" exact>
            <Pertanyaan4
              gold={gold}
              blue={blue}
              green={green}
              orange={orange}
              setGold={setGold}
              setBlue={setBlue}
              setGreen={setGreen}
              setOrange={setOrange}
              intro={INTRO}
            />
          </Route>
          <Route path="/pertanyaan5" exact>
            <Pertanyaan5
              gold={gold}
              blue={blue}
              green={green}
              orange={orange}
              setGold={setGold}
              setBlue={setBlue}
              setGreen={setGreen}
              setOrange={setOrange}
              intro={INTRO}

            />
          </Route>
          <Route path="/pertanyaan6" exact>
            <Pertanyaan6
              gold={gold}
              blue={blue}
              green={green}
              orange={orange}
              setGold={setGold}
              setBlue={setBlue}
              setGreen={setGreen}
              setOrange={setOrange}
              intro={INTRO}
            />
          </Route>
          <Route path="/pertanyaan7" exact>
            <Pertanyaan7
              gold={gold}
              blue={blue}
              green={green}
              orange={orange}
              setGold={setGold}
              setBlue={setBlue}
              setGreen={setGreen}
              setOrange={setOrange}
              intro={INTRO}
            />
          </Route>
          <Route path="/pertanyaan8" exact>
            <Pertanyaan8
              gold={gold}
              blue={blue}
              green={green}
              orange={orange}
              setGold={setGold}
              setBlue={setBlue}
              setGreen={setGreen}
              setOrange={setOrange}
              intro={INTRO}
            />
          </Route>
          <Route path="/pertanyaan9" exact>
            <Pertanyaan9
              gold={gold}
              blue={blue}
              green={green}
              orange={orange}
              setGold={setGold}
              setBlue={setBlue}
              setGreen={setGreen}
              setOrange={setOrange}
              intro={INTRO}
            />
          </Route>
          <Route path="/pertanyaan10" exact>
            <Pertanyaan10
              gold={gold}
              blue={blue}
              green={green}
              orange={orange}
              setGold={setGold}
              setBlue={setBlue}
              setGreen={setGreen}
              setOrange={setOrange}
              intro={INTRO}
            />
          </Route>
          <Route path="/pertanyaan11" exact>
            <Pertanyaan11
              gold={gold}
              blue={blue}
              green={green}
              orange={orange}
              setGold={setGold}
              setBlue={setBlue}
              setGreen={setGreen}
              setOrange={setOrange}
            />
          </Route>
          <Route path="/pertanyaan12" exact>
            <Pertanyaan12
              gold={gold}
              blue={blue}
              green={green}
              orange={orange}
              setGold={setGold}
              setBlue={setBlue}
              setGreen={setGreen}
              setOrange={setOrange}
            />
          </Route>
          <Route path="/pertanyaan13" exact>
            <Pertanyaan13
              gold={gold}
              blue={blue}
              green={green}
              orange={orange}
              setGold={setGold}
              setBlue={setBlue}
              setGreen={setGreen}
              setOrange={setOrange}
            />
          </Route>
          <Route path="/hasil" exact>
            <Hasil
              gold={gold}
              blue={blue}
              green={green}
              orange={orange}
              name={name}
            />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
