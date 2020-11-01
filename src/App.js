import React from 'react';
import data from './data';
import Product from './components/Product';

function App() {
  return (
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
            <div className="row center">
            {
                data.products.map((product) =>(
                    <Product key={product._id} product={product} />
                )
                )
            }
            </div>

        </main>
        <footer className="row center">
            <p>Hecho por Djkde </p>
        </footer>
    </div>
  );
}

export default App;
