import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import Login from './components/Login';
import AddStudent from './components/AddStudent';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} ></Route>
          <Route path='/Homepage' element={<HomePage/>} ></Route>
          <Route path='/AddStudent' element={<AddStudent/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
