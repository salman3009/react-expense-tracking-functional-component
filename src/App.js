import './App.css';
import './assests/font-awesome/css/font-awesome.min.css';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import AddExpense from './components/AddExpense/AddExpense';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/addExpense' element={<AddExpense/>}/>
      </Routes>   
      </BrowserRouter>
    
 
        
    </div>
  );
}

export default App;
