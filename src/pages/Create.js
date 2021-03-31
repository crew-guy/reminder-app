import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import {useHistory} from 'react-router-dom'

export default function Create()
{
  const history = useHistory()

  const useStyles = makeStyles({
    field: {
      marginTop: 20,
      marginBottom: 20,
      display:'block'
    }
  })
  const [title,setTitle] = useState('')
  const [details,setDetails] = useState('')
  const [titleError,setTitleError] = useState(false)
  const [detailsError,setDetailsError] = useState(false)
  const [category, setCategory] = useState('money')
  
  const classes = useStyles()

  const handleSubmit = async (e) =>
  {
    e.preventDefault()

    if (title == '')
      setTitleError(true)
    else{setTitleError(false)}
    
    if (details == '')
      setDetailsError(true)
    else { setDetailsError(false) }
    
    if(title && details && category)
      console.log({ title, details, category })
    const request = await fetch('http://localhost:8000/notes', {
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({title, details, category})
    })
    console.log(request)
    setTitle('')
    setDetails('')
    history.push('/')
  }

  return (
    <Container>
      <Typography
      className={classes.title}
      variant="h6"
      color="textSecondary"
      gutterBottom
      >
        Create a note
      </Typography>
      <form autoComplete="off" noValidate onSubmit={handleSubmit} >
        <TextField
          className={classes.field}
          label="Note Title"
          variant="outlined"
          fullWidth
          color='secondary'
          required
          error={titleError}
          onChange = {(e) => setTitle(e.target.value) }
        />
        <TextField
          className={classes.field}
          label="Note Details"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          onChange = {(e) => setDetails(e.target.value) }
          color='secondary'
          required
          error={detailsError}
        />

        <FormControl className={classes.field} >
          <FormLabel color="secondary" >Note Category</FormLabel>
          <RadioGroup value={category} onChange={e => setCategory(e.target.value) } >
            <FormControlLabel value="money" control = {<Radio/>} label="Money" />
            <FormControlLabel value="todo" control = {<Radio/>} label="Todo" />
            <FormControlLabel value="reminder" control = {<Radio/>} label="Reminder" />
            <FormControlLabel value="work" control = {<Radio/>} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          className={classes.btn}
          type="submit"
          onClick={() => console.log('clicked !')}
          variant="contained"
          color="secondary"
          endIcon = { <ArrowForwardIosIcon/> }
        > 
          Submit
        </Button>
      </form>


    </Container>
  )
}
