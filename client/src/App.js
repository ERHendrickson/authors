import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import AddAuthor from './components/AddAuthor';
import EditAuthor from './components/EditAuthor';
import AuthorMain from './components/AuthorMain';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AuthorMain></AuthorMain>}></Route>
        <Route path='/new' element={<AddAuthor></AddAuthor>}></Route>
        <Route path='/edit/:id' element={<EditAuthor></EditAuthor>}></Route>
      </Routes>
    </div>
  );
}

export default App;
