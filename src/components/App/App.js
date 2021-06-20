//STYLING
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import "@fontsource/roboto";

import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import Header from '../Header/Header';
import AddMovie from '../AddMovie/AddMovie';

const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#e57373'
          
      },
      secondary : {
          main: '#ffc107'
      }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Router>  
        <Header />      
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/addMovie">
          <AddMovie />
        </Route>
      </Router>
    </div>
    </ThemeProvider>
  );
}


export default App;
