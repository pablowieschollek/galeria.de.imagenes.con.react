import React from 'react';
import './App.css';
import Cards from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <form>
      <Header/>
      <div className='maincontainer'>
      <Cards src= "https://m.media-amazon.com/images/I/A1ITvzLk-jL._SL1500_.jpg" title= "Tubos de óleo" text= "Tubos de pintura al óleo de alta pigmentación"/>
      <Cards src= "https://d3ugyf2ht6aenh.cloudfront.net/stores/833/525/products/d_nq_np_2x_748523-mla31017368818_062019-f1-e427b0242c2808ada815995109622549-1024-1024.jpg" title="Cartón entelado" text="Soporte de carón piedra entalda con tela 100% algodón e impirmado con gesso"/>
      <Cards src= "http://www.roian.cl/home/wp-content/uploads/2015/06/pinceles-suaves-a5.jpg" title="Set de pinceles" text="Set de x pinceles de madera y fibra sintética"/>
      </div>
      <Footer/>
    </form>
  )
}

export default App;
