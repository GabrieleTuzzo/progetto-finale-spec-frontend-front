import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Comparator from '../components/Comparator';

export default function DefaultLayout() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="container">
                <Outlet />
            </main>
            <Comparator />
        </>
    );
}
