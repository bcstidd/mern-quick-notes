import './NoteCard.css'
export default function NoteCard({ note }) {

    return (
        <div class="card">
            <p>{note.text}</p>
            <h3>Written on {new Date(note.createdAt).toLocaleString()}</h3>
        </div>
    );
}