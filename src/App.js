// import { useState } from "react";
import ItemListContainer from "./components/itemListConteiner/itemListConteiner";
import NavBar from "./components/NavBar/NavBar";
import './App.css'


function App() {

  
  return (
    <div className="App">
      
      <NavBar/> 
      <ItemListContainer greetings={'MENÚ DE LA SEMANA'}/>
      
    </div>
  );
}

export default App;
