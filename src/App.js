import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import MovieList from './components/MovieList/MovieList';
import Movie from './pages/movieDetail/movie';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route path='movie/:id' element={<Movie />} />
          <Route path='movies/:type' element={<MovieList />} />
        </Routes>
    </div>
  );
}

export default App;
