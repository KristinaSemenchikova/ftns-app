import React, { useState } from "react";
import s from "./Notes.module.css";
import { Input, Button } from "antd";
import NoteItem from "./NoteItem";
import {guid} from './RandomId';

const { TextArea } = Input;

const Notes: React.FC = (props:any) => {
  const [notes, addNote] = useState([{
    id : guid(),
    text : ''
  }]);
  const [noteItem, setNote] = useState("");
  let onTextChange = (e: any) => {
    setNote(e.target.value);
  };
  let addToNotes = () => {
    let newNote = {
      id : guid(),
      text : noteItem
    };
    if(noteItem) {
      addNote([...notes,newNote]);
      setNote('');
    } 
  };
  let deleteNote = (e:any) => {
   let id = e.target.dataset.id
    let newNotes = notes.filter(note => note.id !== id);
    addNote([...newNotes]);
  };
 
  let noteItems = notes.map((item:any) =>{
    if(item.text) {
      return (
        <NoteItem delete = {deleteNote} id = {item.id} note = {item}/>
      )
    }
  } );
  return (
    <div className={s.userNotes}>
      <h2>Dear diary✍️</h2>
      <div className={s.addNote}>
        <TextArea onChange={onTextChange} value={noteItem} rows={4} />
        <Button onClick={addToNotes} type="primary">
          Add note
        </Button>
      </div>
      <div className = {s.diary}>{noteItems}</div>
    </div>
  );
};

export default Notes;
