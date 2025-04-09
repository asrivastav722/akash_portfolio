import { Routes, Route, Link } from 'react-router-dom';
import Layout from './Layout/Layout';
const Home = () => './Pages/Home';

const About = () => <h1>About Page</h1>;

function App() {
  return (
          <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
  );
}

export default App;