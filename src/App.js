import logo from './logo.svg';
import './App.css';
import Products from './Products';
import Navigation from './Navigation';
import SignIn from './SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './ProductDetails';
function App() {
  return (
    <div >
      <Navigation/>
      <BrowserRouter>
      <Routes>
        
        <Route path='more' element={<Products/>}/>
        <Route path='SignIn' element={<SignIn/>}/> 
        {/* <Route index element={<SignIn/>}/> */}
        
      </Routes>
      </BrowserRouter>
      <Products/>
      <SignIn/>
      
      
      
      
    </div>
  );
}

export default App;
