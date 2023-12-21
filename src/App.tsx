import { Routes, Route } from 'react-router-dom';

import MainPage from './components/pages/mainPage/MainPage';
import CartPage from './components/pages/cartPage/CartPage';
import Page404 from './components/pages/Page404/Page404';
import SinglePizzaPage from './components/pages/SinglePizzaPage/SinglePizzaPage';
import MainLayout from './layouts/MainLayout';

import './App.scss';

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route path="" element={<MainPage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="pizza/:id" element={<SinglePizzaPage />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
