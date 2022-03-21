import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar';
import CodeForInterview from './Component/CodeForInterview';
import AllUser from './Component/AllUser';
import AddUser from './Component/AddUser';
import NotFound from './Component/NotFound';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EditUser from './Component/EditUser';
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route exact path="/" element={<CodeForInterview/>}/>
    <Route exact path="/all" element={<AllUser/>}/>
    <Route exact path="/add" element={<AddUser/>}/>
    <Route exact path="/edit/:id" element={<EditUser/>}/>
    <Route path='*' exact={true}  element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
