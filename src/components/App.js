import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import AddNote from './AddNote';
import AddTopic from './AddTopic';
import Topic from './Topics';

const App = ()=>{
    const [notes, setNotes ] = useState([]);
    const [topics, setTopics ] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState({topicSelected: false, name: ''});

    useEffect(()=>{
        if(localStorage.getItem('topics') === null){
            localStorage.setItem('topics', JSON.stringify([]));
        }else{
            let localTopics = JSON.parse(localStorage.getItem('topics'));
            setTopics(localTopics);
        }
        if(localStorage.getItem('notes') === null){
            localStorage.setItem('notes', JSON.stringify([]));
        }else{
            let localNotes = JSON.parse(localStorage.getItem('notes'));
            setNotes(localNotes);
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('topics', JSON.stringify(topics));
        localStorage.setItem('notes', JSON.stringify(notes));
    },[topics, notes]);


    return (
        <>
            <Header />
            {!selectedTopic.topicSelected ? <>
            <AddTopic topics={topics}setTopics={setTopics}/>
            {topics.map((topic, index) => 
                <Topic 
                key={index}
                topic={topic}
                setSelectedTopic={setSelectedTopic}
                />
            )}</> : <>
            <AddNote notes={notes} setNotes={setNotes} setSelectedTopic={setSelectedTopic} topic={selectedTopic.name}/>
            {notes.map((note, index) => <Note 
                key={index} 
                title={note.title} 
                content={note.content}/>)}
                </>}
            <Footer />
        </>
    )
}

export default App;