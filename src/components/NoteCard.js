import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles, Typography } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import {green, red, blue, purple, grey} from '@material-ui/core/colors'

const useStyles = makeStyles((theme) =>

{
    return({
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
        },
    },
    avatar: {
        background: (note)=>{
            switch (note.category)
            {
                case ('money'):
                    return green[700]
                case ('work'):
                    return red[500]
                case ('reminders'):
                    return purple[500]
                case ('todo'):
                    return blue[500]
                default:
                    return grey[700]
            }
        }
    },
})
}    
)

const NoteCard = ({ note, handleDelete }) =>
{
    const classes = useStyles(note)
    return (
        <Card className={classes.test} >
            <CardHeader
                avatar={
                    <Avatar className={classes.avatar} >
                        {note.category.substring(0,1).toUpperCase()}
                    </Avatar>        
                }
                action={
                    <IconButton aria-label="settings">
                  <DeleteIcon  onClick={()=>handleDelete(note.id)} />
                  </IconButton>
                }
                title={note.title}
                subheader={note.category}
                >
            </CardHeader>
            <Typography>
                <CardContent>
                    {note.details}
                </CardContent>
            </Typography>
        </Card>
    )
}

export default NoteCard
