import React from "react";
import s from './Me.module.css';
import MyForm from "./Form";

const MePage: React.FC = () => {
  return (
    <div className = {s.userInfo}>
    <h2>Hi, beauty 😊
    </h2>
    <div className = {s.formArea}>
      <MyForm/>

    </div>
    </div>
  );
};

export default MePage;
