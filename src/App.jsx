import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalContext } from './contexts/GlobalContext';
import useMotorcycles from './hooks/useMotorcycles';
// Pages
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const { motorcycles } = useMotorcycles();

    return (
        <GlobalContext.Provider value={{ motorcycles }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/motorcycle/:id" element={<DetailPage />} />
                </Routes>
            </BrowserRouter>
        </GlobalContext.Provider>
    );
}

export default App;
