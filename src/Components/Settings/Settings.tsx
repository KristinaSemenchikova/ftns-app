import React from "react";
import s from './Settings.module.css';
import { Button } from "antd";

const Settings = (props : any) => {
  return (
    <div className = {s.settingsWrapper}>
     <div>
       <Button onClick = {props.toggleTheme} type="primary">
         Change theme 
         </Button>
     </div>
    </div>
  );
};

export default Settings;
