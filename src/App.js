import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Login from "./components/Login";
import AvailableProduct from './components/AvailableProducts' ; 
import Guard from './components/RoutesGuard'; // for available products list view import the
import {Route,Routes} from 'react-router-dom'


 

function App() {
  return (
    
     <div className="App">
      <Header branding='Products App'/>
      <div className="container">
        <Routes>
        <Route path="/sign-in" element={<Login/>}/>
        <Route element={<Guard/>}>
          
        <Route path="/" element={<AvailableProduct/>}/>
       
        </Route>
      </Routes>
     </div>
     </div>
  );
}

export default App;
