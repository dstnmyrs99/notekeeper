import React from 'react';

const Note = ({title, content, id, notes,  setNotes})=>{

    const deleteNote = ()=>{
        setNotes(notes.filter((note, index) => {
            return index !== id;
        }))
    }
    return (
        <div className='note'>
            <h1>{title}</h1>
            <p>{content}</p>
            <button className='delete' onClick={deleteNote}>delete</button>
        </div>
    )
}

export default Note;