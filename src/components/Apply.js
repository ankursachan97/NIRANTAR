import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Apply = () => {
    return (
        <div className="section" style={{textAlign: 'center'}}>
            <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>
                <h1 className="section-title">Apply for SoochnaPreneur</h1>
                <p style={{fontSize: '1.2rem', marginBottom: '40px'}}>Join the SoochnaPreneur initiative and make a difference!</p>
                
                <Link 
                    to="/registration" 
                    className="btn btn-primary"
                    style={{
                        fontSize: '1.1rem',
                        padding: '15px 40px',
                        animation: 'glow 2s infinite ease-in-out'
                    }}
                >
                    Click here to apply
                </Link>
                
                <div style={{marginTop: '50px'}}>
                    <div style={{
                        display: 'inline-block',
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        background: 'var(--gradient)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        animation: 'float 3s ease-in-out infinite'
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apply;