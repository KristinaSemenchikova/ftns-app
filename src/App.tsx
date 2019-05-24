import React from "react";
import Header from "./Components/Header/Header";
import { Route, Switch } from "react-router-dom";
import MePage from "./Components/Me/Me";
import CalculatorContainer from "./Components/Calculator/CalculatorContainer";
import style from './App.module.css';

const App: React.FC = () => {
  return (
    <div className = {style.appWrapper}>
      <Header />
      <Switch>
        <Route path="/calculator" render={() => <CalculatorContainer />} />
        <Route path="/me" render={() => <MePage />} />
      </Switch>
    </div>
  );
};

export default App;
