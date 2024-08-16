import React, { useState, useEffect } from 'react'

import { NotesList } from './NotesList'
import { NoteForm } from './NoteForm'

export const App = (props) => {
    const { service } = props

    const [notes, setNotes] = useState([]);
    const [selected, setSelected] = useState(null);


    const getNotes = async() => {
        const _notes =  await service.getNotes();
        console.log(_notes)
        setNotes(_notes);
    }

    useEffect( () => {
        getNotes()
    },[])



    // (!) Get notes from service

    // Select new empty note
    function newNote(){

    }

    // Set note as selected
    function onSelect(id){
        const _selected = notes.find(note => note.id === id)
        console.log('s', _selected)
       setSelected(_selected)
    }

    function updateTitle(e){
        setSelected((prev) => ({...prev, title: e.target.value}))
    }

    // Save note to service
    function onSubmit(){

        setNotes(notes => notes.map(note => selected?.id === note.id ? selected : note))
    }

    // Unselect note
    function onCancel(){

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>React notes</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <NotesList
                        notes={notes}
                        onSelect={onSelect}
                    />
                </div>
                <div className="col-md-8">
                    <NoteForm note={selected} onTitleChange={updateTitle} onSubmit={onSubmit}  />
                    <div><button id="new-note">New Note</button></div>
                </div>
            </div>
        </div>
    )
}
