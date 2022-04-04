
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Blogs from './components/Blogs/Blogs';
import DashBoard from './components/DashBoard/DashBoard';
import About from './components/About/About';



function App() {
  return (
    <div className="App">
     <div>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/reviews' element={<Reviews></Reviews>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
      <Route path='/about' element={<About></About>}></Route>
    </Routes>
     </div>
    
    </div>
  );
}

export default App;
