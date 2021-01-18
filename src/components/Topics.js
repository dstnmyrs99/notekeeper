import React from 'react';

const Topic = ({topic, setSelectedTopic})=>{
    return (
        <div className='note'>
            <h1 >{topic}</h1>
            <button onClick={()=> setSelectedTopic({topicSelected: true, name: [topic]})}>open</button>
        </div>
    )
}

export default Topic;