import {useState} from 'react'
import user from '../../../models/user';
import { createNote } from '../../utilities/notes-api'

export default function NewNoteForm({ user, setUser}) {
    const [newNote, setNewNote] = useState('')
}

async function NewNoteForm(evt) {
    evt.preventDefault();
    try {
        const note = await createNote({ text:newNote, user: user._id })
        setNotes(prev => [...prevNotes, note]);
        setNewNote('')
    } catch (err) {
        console.log(err)
    }
}

return (
    <div>
        <h4>Create</h4>
    </div>
)
