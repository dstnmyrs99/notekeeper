import React, { useState } from "react";

const AddTopic = ({topics, setTopics}) => {
    const [topic, setTopic] = useState('');
  return (
    <form action="">
      <h1>Topic:</h1>
      <input onChange={(e)=>setTopic(e.target.value)}type="text" value={topic}/>
      <button onClick={(e)=> {
          e.preventDefault();
          setTopics([...topics, topic]);
          setTopic('');
          }}>add</button>
    </form>
  );
};

export default AddTopic;
