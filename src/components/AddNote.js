import React, { useState } from "react";

const AddNote = ({notes, setNotes, topic}) => {
    console.log(topic);
    const [note, setNote] = useState({title: '', content: ''})
  return (
    <form action="">
      <h1>{topic}</h1>
      <h3>Title:</h3>
      <input onChange={(e)=>setNote({...note, title: e.target.value})}type="text" value={note.title}/>
      <h3>notes:</h3>
      <textarea onChange={(e)=>setNote({...note, content: e.target.value})} cols="30" rows="5" value={note.content}></textarea>
      <button onClick={(e)=> {
          e.preventDefault();
          setNotes([...notes, note]);
          setNote({title: '', content: ''});
          }}>add</button>
    </form>
  );
};

export default AddNote;
