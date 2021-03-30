import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    test: {
        border: (note) =>
        {
            switch (note.category)
            {
                case ('money'):
                    return `1px solid green`
                case ('work'):
                    return `1px solid red`
                case ('todo'):
                    return `1px solid blue`
                case ('reminders'):
                    return `1px solid purple`
                default:
                    return `1px solid black`
            }   
        }
    }
})

const NoteCard = ({ note, handleDelete }) =>
{
    const classes = useStyles(note)
    return (
        <Card className={classes.test} >
            <CardHeader
                action={
                <IconButton aria-label="settings">
                  <DeleteIcon  onClick={()=>handleDelete(note.id)} />
                </IconButton>
                }
                title={note.title}
                subheader={note.category}
            >
            </CardHeader>
            <CardContent>
                {note.details}
            </CardContent>
        </Card>
    )
}

export default NoteCard
