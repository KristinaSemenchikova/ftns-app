import React from "react";
import Header from "./Components/Header/Header";
import styled from "styled-components";
import Calculator from "./Components/Calculator/Calculator";
import { Route, Switch } from "react-router-dom";
import MePage from "./Components/Me/Me";

const AppWrapper = styled.div`
  background-color: #8cff8e;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2390ffb6'/%3E%3Cstop offset='1' stop-color='%2390ffb6' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23afffff'/%3E%3Cstop offset='1' stop-color='%23afffff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23b3e6ff'/%3E%3Cstop offset='1' stop-color='%23b3e6ff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%238cff8e'/%3E%3Cstop offset='1' stop-color='%238cff8e' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2394ffdb'/%3E%3Cstop offset='1' stop-color='%2394ffdb' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23d1d2ff'/%3E%3Cstop offset='1' stop-color='%23d1d2ff' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  heigth: 100vh;
  display: grid;
  grid-template-rows: 100px 10fr;
  grid-template-columns: 1fr 10fr;
  grid-template-areas:
    "h  h "
    " m m  ";
  font-family: "Lucida Sans";
  font-size: 22px;
`;

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Header />
      <Switch>
        <Route path="/calculator" render={() => <Calculator />} />
        <Route path="/me" render={() => <MePage />} />
      </Switch>
    </AppWrapper>
  );
};

export default App;
