import React from 'react'


export const NotesList = (props) => {
    const { notes, onSelect  } = props

    console.log(notes)
    return <div className="list-group">

        {
            notes.map(({id, title, text}) => (
            <div onClick={() => {onSelect(id)} } data-testid={id} key={id} className="list-group-item active">
                {title}
                <div>{text}</div>
            </div>))
        }

        {/*<div data-testid="note-item" className="list-group-item">Inactive note example</div>*/}
    </div>
}
