import React, { useState } from "react";

const AddNote = ({notes, setNotes, topic, setTopics, topics, setSelectedTopic}) => {
    const [note, setNote] = useState({title: '', content: '', topic: ''})

    const back = (e) => {
        e.preventDefault();
        setSelectedTopic({topicSelected: false, name: ''});
    }
  return (
    <form action="">
      <h1>{topic}</h1>
      <input onChange={(e)=>setNote({...note, title: e.target.value, topic})}type="text" value={note.title} placeholder='Title'/>
      <textarea onChange={(e)=>setNote({...note, content: e.target.value, topic})} cols="30" rows="5" value={note.content} placeholder='Notes'></textarea>
      <button onClick={(e)=> {
          e.preventDefault();
          setNotes([...notes, note]);
          setNote({title: '', content: '', topic: ''});
          }}>add</button>
          <button className='back' onClick={back}>back</button>
    </form>
  );
};

export default AddNote;
