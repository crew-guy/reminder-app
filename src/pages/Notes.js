import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import NoteCard from '../components/NoteCard'

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
  
  return (
    <Grid container spacing={3}>
    {notes.map(note =>{
      return (
        <Grid key={note.id} item xs={12} sm={6} md={3} lg={4}>
          <NoteCard variant='outlined' note={note} handleDelete={handleDelete} />
        </Grid>
        )
      })}
    </Grid>
  )
}
