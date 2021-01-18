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
                id={index}
                topic={topic}
                topics={topics}
                setTopics={setTopics}
                notes={notes}
                setNotes={setNotes}
                setSelectedTopic={setSelectedTopic}
                />
            )}</> : <>
            <AddNote notes={notes} setNotes={setNotes}  topic={selectedTopic.name} setTopics={setTopics} topics={topics} setSelectedTopic={setSelectedTopic}/>
            {notes.map((note, index) => {
                if(note.topic == selectedTopic.name){
                return <Note 
                key={index} 
                id={index}
                title={note.title} 
                content={note.content}
                notes={notes}
                setNotes={setNotes}/>
                }else{
                    return null;
                }
            })}
                </>}
            <Footer />
        </>
    )
}

export default App;