
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/products' element={ <Products/> }/>
        <Route path='/cart' element={ <Cart/> }/>
        <Route path='/register' element={ <Register/> }/>
        <Route path='/login' element={ <LogIn/> }/>
      </Routes>
    </div>
  );
}

export default App;
