import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import {  blueGrey} from '@material-ui/core/colors'
import Layouts from './components/Layouts'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f9f9f9',
    },
    secondary:blueGrey
  },
  typography: {
    fontFamily: 'Open Sans',
    fontWeightLight:300,
    fontWeightRegular:400,
    fontWeightMedium:500,
    fontWeightBold:600,
  }
})

function App() {
  return (
    <ThemeProvider theme ={theme} >
      <Router>
      <Layouts>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
            </Route>
          </Switch>
        </Layouts>
      </Router>
    </ThemeProvider>
  );
}

export default App;
