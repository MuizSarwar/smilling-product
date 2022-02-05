import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import { useEffect, useState } from 'react';

function App() {
  const [products,setProducts] = useState([]);
  useEffect(function (){
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  console.log(products)
  return (
    <div >
          <Header></Header>
          <Shop></Shop>
    </div>
  );
}

export default App;
