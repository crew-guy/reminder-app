import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import NoteCard from '../components/NoteCard'
import Masonry from 'react-masonry-css'

export default function Notes() {
  const [notes, setNotes] = useState([])

  const handleDelete = async(id) =>
  {
    const request = await fetch(`http://localhost:8000/notes/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })

    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }
  
  useEffect(async() =>
  {
    const res = await axios.get('http://localhost:8000/notes')
    setNotes(res.data)
  })

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  };
  
  return (
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {notes.map(note => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
  )
}
