import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
    return (
        <>
            <header>I'm the header</header>
            <main className="container">
                <Outlet></Outlet>
            </main>
            <footer>I'm the footer</footer>
        </>
    );
}
