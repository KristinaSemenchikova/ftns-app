import React from "react";
import Header from "./Components/Header/Header";
import { Route, Switch } from "react-router-dom";
import MePage from "./Components/Me/Me";
import CalculatorContainer from "./Components/Calculator/CalculatorContainer";
import style from './App.module.css';
import Notes from "./Components/Notes/Notes";

const App: React.FC = () => {
  return (
    <div className = {style.appWrapper}>
      <Header />
      <Switch>
        <Route path="/calculator" render={() => <CalculatorContainer />} />
        <Route path="/me" render={() => <MePage />} />
        <Route path="/notes" render={() => <Notes />} />
      </Switch>
    </div>
  );
};

export default App;
