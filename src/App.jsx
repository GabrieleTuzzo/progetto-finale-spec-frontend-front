import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalContext } from './contexts/GlobalContext';
import useMotorcycles from './hooks/useMotorcycles';
// Pages
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import DefaultLayout from './layouts/DefaultLayout';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const motorcyclesController = useMotorcycles();

    return (
        <GlobalContext.Provider value={motorcyclesController}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DefaultLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/motorcycle/:id"
                            element={<DetailPage />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </GlobalContext.Provider>
    );
}

export default App;
