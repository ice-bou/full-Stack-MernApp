import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavContact from './Components/NavContact';
import Home from './Components/Home';
import AddContact from './Components/AddContact';
import ListContact from './Components/ListContact';
import EditContact from './Components/EditContact';
import logo from './logo.svg';
import About from './Components/About';
import Profile from './Components/Profile';



function App() {
  return (
    <div>
     <NavContact/>
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
     <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/ListContact' element={<ListContact/>}/>
    <Route path='/AddContact' element={<AddContact/>}/>
    <Route path='/EditContact/:id' element={<EditContact/>}/>
    <Route path='/About' element={<About/>}/>   
    <Route path='/Profil' element={<Profile/>}/>

    </Routes>
    </header>
    </div>
  );
}

export default App;
