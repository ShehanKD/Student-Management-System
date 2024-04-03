import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import HomePage from './components/HomePage';
import AddStudent from './components/AddStudent';
//import Login from './components/Login';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddStudent/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
