import React from 'react';

const Topic = ({topic, setSelectedTopic, topics, setTopics, id, notes, setNotes})=>{

    const deleteTopic = ()=>{
        setTopics(topics.filter((singleTopic, index) => {
            return index !== id;
        }));
        setNotes(notes.filter(note => note.topic !== topic));
    }

    return (
        <div className='note'>
            <h1 >{topic}</h1>
            <button className='add' onClick={()=> setSelectedTopic({topicSelected: true, name: topic})}>open</button>
            <button className='delete' onClick={deleteTopic}>delete</button>
        </div>
    )
}

export default Topic;