import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import CreateAuthor from './components/CreateAuthor';
import EditAuthor from './components/EditAuthor';
import ListAll from './components/ListAll';
import Error from './components/Error'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<ListAll />}/>
          <Route path='/edit/:id' element={<EditAuthor />}/>
          <Route path='/new' element={<CreateAuthor />}/>
          <Route path='/error' element={<Error />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
