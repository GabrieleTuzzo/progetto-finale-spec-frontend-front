import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalContext } from './contexts/GlobalContext';
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';

function App() {
    return (
        <GlobalContext.Provider value={{}}>
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
