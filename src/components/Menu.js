import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './styles.css';

const Menu = () => {
    const [activeLink, setActiveLink] = useState('');
    
    // This would normally come from react-router or your current route
    // For demo purposes, we'll simulate it
    const handleSetActive = (path) => {
        setActiveLink(path);
        // In a real app, you'd get this from the router
    };

    return (
        <nav style={{
            background: 'white',
            boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
            padding: '20px 0',
            position: 'sticky',
            top: '0',
            zIndex: '100'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link 
                    to="/" 
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        textDecoration: 'none',
                        color: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}
                >
                    <span style={{
                        display: 'inline-block',
                        width: '30px',
                        height: '30px',
                        borderRadius: '8px',
                        background: 'var(--gradient)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: 'rotate(45deg)'
                    }}>
                        <span style={{transform: 'rotate(-45deg)'}}>S</span>
                    </span>
                    SoochnaPreneur
                </Link>
                
                <ul style={{
                    display: 'flex',
                    listStyle: 'none',
                    gap: '20px',
                    margin: '0',
                    padding: '0'
                }}>
                    {[
                        { path: '/about', label: 'About' },
                        { path: '/apply', label: 'Apply' },
                        { path: '/blogs', label: 'Blogs' },
                        { path: '/impact', label: 'Impact' },
                        { path: '/media', label: 'Media' },
                        { path: '/partners', label: 'Partners' },
                        { path: '/awards', label: 'Awards' }
                    ].map((item, index) => (
                        <li key={index}>
                            <Link 
                                to={item.path}
                                onClick={() => handleSetActive(item.path)}
                                style={{
                                    textDecoration: 'none',
                                    color: activeLink === item.path ? 'var(--primary)' : 'var(--dark)',
                                    fontWeight: '600',
                                    padding: '10px 15px',
                                    borderRadius: '50px',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    display: 'inline-block'
                                }}
                            >
                                {item.label}
                                {activeLink === item.path && (
                                    <span style={{
                                        position: 'absolute',
                                        bottom: '-5px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '30px',
                                        height: '3px',
                                        background: 'var(--gradient)',
                                        borderRadius: '3px'
                                    }}></span>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Menu;