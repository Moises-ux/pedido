import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Client from './pages/Client';
import Product from './pages/Product';
import Order from './pages/Order';

import Header from './components/Header';

function RoutesApp() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Dashboard /> }/>
                <Route path='/client' element={ <Client /> } />
                <Route path="/product" element={ <Product /> }/>
                <Route path='/order' element={ <Order /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;


