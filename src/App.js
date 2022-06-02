import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/layouts/Header';
import ScrollToTop from './components/layouts/ScrollToTop';

import Home from './pages/Home';
import Details from './pages/Details';


function App() {

  return (

    <>

      <Router>

        <ScrollToTop/>

        <Header/>

        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/job/:id' element={<Details/>} />
          <Route path='*' element={<Home/>} />

        </Routes>

      </Router>

    </>

  );

}

export default App;