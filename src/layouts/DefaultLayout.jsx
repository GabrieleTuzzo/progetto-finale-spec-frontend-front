import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function DefaultLayout() {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className="container">
                <Outlet></Outlet>
            </main>
        </>
    );
}
