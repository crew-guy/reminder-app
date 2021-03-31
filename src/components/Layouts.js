import { Avatar, makeStyles } from '@material-ui/core'
import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { AddCircleRounded, Apps } from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router-dom'
import {format } from 'date-fns'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'

const drawerWidth = 240

const menuItems = [
    {
        text:"My Notes",
        icon: <Apps color="secondary"/>,
        path:"/"
    },
    {
        text:"Add Note",
        icon: <AddCircleRounded color="secondary"/>,
        path:"/create"
    }
]

const useStyles = makeStyles((theme) =>
{
    return(
        {
            pages: {
                background: "#f9f9f9",
                width: '100%',
                padding:theme.spacing(3)
            },
            root: {
                display:'flex'
            },
            drawer: {
                width:drawerWidth
            },
            drawerPaper: {
                width:drawerWidth
            },
            active: {
                background:'#f4f4f4'
            },
            title: {
                padding:theme.spacing(2)
            },
            appbar:{
                width : `calc(100% - ${drawerWidth}px)`
            },
            toolbar:theme.mixins.toolbar
        }
    )
})

const Layouts = ({children}) => {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    return (
        <div className={classes.root} >
            
            <AppBar className={classes.appbar} >
                <ToolBar style ={{display:'flex', justifyContent:'space-between'}}  >
                    <Typography>
                        Today is the {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography style={{display:'flex', alignItems:'center'}}
                    >
                    Ankit
                    <Avatar style={{marginLeft:'1rem'}} >
                        <img src="https://picsum.photos/200/300" alt="giuy"/>
                    </Avatar>
                    </Typography>
                </ToolBar>
            </AppBar>
            
            <Drawer
                className={classes.drawer}
                anchor='left'
                variant="permanent"
                classes={{ paper: classes.drawerPaper }}
                
            >
                <Typography className ={classes.title} >
                    Ninja notes
                </Typography>
                <List>
                    {menuItems.map(item => (
                        <ListItem
                            button
                            onClick={()=> history.push(item.path)}
                            key={item.text}
                            className={location.pathname==item.path ? classes.active :null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <div className={classes.pages}>
                <div className={classes.toolbar} ></div>
                {children}
            </div>
        </div>
    )
}

export default Layouts
