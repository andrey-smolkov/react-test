import React from 'react'

export const NoteForm = ({ note, onTitleChange, onSubmit  }) => {
    const { title ='', text = '' }  = note || {};

    return <form>
        <div className="form-group">
            <label>Title:</label>
            <input
                className="form-control"
                data-testid="input-title"
                onChange={onTitleChange}
                name="title"
                value={title}
            />
        </div>
        <div className="form-group">
            <label>Note:</label>
            <textarea
                className="form-control"
                data-testid="input-text"
                name="text"
                value={text}
            />
        </div>
        <div className="form-group">
            <input
                type="button"
                data-testid="cancel-note"
                className="btn btn-default pull-right"
                value="Cancel"
            />
            <input
                type="button"
                data-testid="save-note"
                className="btn btn-default pull-right"
                value="Save"
                onClick={onSubmit}
            />
        </div>
    </form>
}
