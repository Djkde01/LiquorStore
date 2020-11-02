import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
      <BrowserRouter>
    <div className="grid-container">
        <header className="row">
            <div>
                <a href="/">Logo Licorera</a>
            </div>
            <div>
                <a href="/cart">Carrito</a>
                <a href="/signin">Entrar</a>
            </div>
        </header>
        <main>
        <Route path="/product/:id" component={ProductScreen}/>
        <Route path="/" component={HomeScreen} exact/>

        </main>
        <footer className="row center">
            <p>Hecho por Djkde </p>
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
