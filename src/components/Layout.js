import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import './styles.css';
import './animations.css';

const Layout = () => {
    return (
        <div className="app-container">
            {/* Header with navigation */}
            <header className="app-header">
                <Menu />
            </header>

            {/* Main content area - Outlet will render the current route's component */}
            <main className="app-main">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="app-footer">
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;