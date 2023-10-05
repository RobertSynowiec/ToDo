import About from './components/About/About';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Favorite from './components/Favorite/Favorite';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
};
export default App;