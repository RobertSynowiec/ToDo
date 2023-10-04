import About from './About';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Favorite from './Favorite';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Home />
        <About />
        <Favorite />
      </Container>
    </main>
  );
};
export default App;