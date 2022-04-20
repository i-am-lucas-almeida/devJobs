import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Details from './pages/Details';


function App() {

  return (

    <>

      <Router>

        <Header/>

        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/job/:id' element={<Details/>} />

        </Routes>

      </Router>

    </>

  );

}

export default App;