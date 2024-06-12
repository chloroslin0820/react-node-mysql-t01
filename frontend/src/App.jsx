import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import Books from './pages/Books';
import Add from './pages/Add';
import Update from './pages/Update';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Books />} />
        <Route path='/add' element={<Add />} />
        <Route path='/update' element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
