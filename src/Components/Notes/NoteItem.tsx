import React from "react";
import s from "./Notes.module.css";
import { Button } from "antd";

const NoteItem = (props: any) => {
  return (
    <div className={s.note}>
     <span>  {props.note.text}</span>
      <Button onClick = {props.delete} data-id = {props.note.id} type="primary" icon="delete" />
    </div>
  );
};
export default NoteItem;
