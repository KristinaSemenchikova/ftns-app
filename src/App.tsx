import React, { useState } from "react";
import Header from "./Components/Header/Header";
import { Route, Switch } from "react-router-dom";
import MePage from "./Components/Me/Me";
import CalculatorContainer from "./Components/Calculator/CalculatorContainer";
import style from "./App.module.css";
import Notes from "./Components/Notes/Notes";
import Settings from "./Components/Settings/Settings";

const App: React.FC = () => {
  const [appTheme, changeTheme] = useState(style.appWrapperLight);
  let toggleTheme = () => {
    return appTheme === style.appWrapperLight
      ? changeTheme(style.appWrapperDark)
      : changeTheme(style.appWrapperLight);
  };
  return (
    <div className={appTheme}>
      <Header />
      <Switch>
        <Route path="/calculator" render={() => <CalculatorContainer />} />
        <Route path="/me" render={() => <MePage />} />
        <Route path="/notes" render={() => <Notes />} />
        <Route
          path="/settings"
          render={() => <Settings toggleTheme={toggleTheme} />}
        />
      </Switch>
    </div>
  );
};

export default App;
