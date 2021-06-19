import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import Header from '../Header/Header';

function App() {
  return (
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
          <h2>Add Movie</h2>
        </Route>
      </Router>
    </div>
  );
}


export default App;
