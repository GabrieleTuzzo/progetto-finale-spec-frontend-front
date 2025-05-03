import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalContext } from './contexts/GlobalContext';
// Hooks
import useFavorites from './hooks/useFavorites';
import useMotorcycles from './hooks/useMotorcycles';
import useComparator from './hooks/useComparator';
// Pages
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import DefaultLayout from './layouts/DefaultLayout';
import Favorites from './pages/Favorites';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Styles
import './App.css';

function App() {
    const motorcyclesController = useMotorcycles();
    const favoritesController = useFavorites();
    const comparatorController = useComparator();

    return (
        <GlobalContext.Provider
            value={{
                ...motorcyclesController,
                ...favoritesController,
                ...comparatorController,
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DefaultLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/motorcycle/:id"
                            element={<DetailPage />}
                        />
                        <Route
                            path="/motorcycle/favorites"
                            element={<Favorites />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </GlobalContext.Provider>
    );
}

export default App;
