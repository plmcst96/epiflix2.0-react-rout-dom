import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Hero from './components/Hero';
import GalleryMovie from './components/GalleryMovie';
import Profile from './components/Profile';
import Settings from './components/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TvShows from './components/TvShows';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <MyNav />
          <Hero />
          <Routes>
            <Route element={<TvShows idSearch={'star trek'} />} path='/tv-shows' />
            <Route element={<Profile />} path='/profile' />
            <Route element={<Settings />} path='/setting' />
          </Routes>
        </header>

        <main>
          <Routes>
            <Route element={<><GalleryMovie idSearch={'harry potter'} /><GalleryMovie idSearch={'Star Wars'} /><GalleryMovie idSearch={'Avengers'} /></>} path='/' />
            <Route element={<MovieDetails />} path='/movie-detail/:movieId' />
          </Routes>
        </main>

        <footer>
          <MyFooter />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
