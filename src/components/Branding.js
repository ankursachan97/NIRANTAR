import React from 'react';
import './styles.css';

const Branding = () => {
    return (
        <div className="section animated-bg" style={{
            textAlign: 'center',
            color: 'white',
            padding: '100px 0'
        }}>
            <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>
                <h1 style={{
                    fontSize: '4rem',
                    fontWeight: '800',
                    marginBottom: '20px',
                    textShadow: '2px 2px 10px rgba(0,0,0,0.2)',
                    animation: 'float 3s ease-in-out infinite'
                }}>
                    SoochnaPreneur
                </h1>
                
                <div style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.2)',
                    margin: '0 auto 30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(5px)',
                    border: '2px solid rgba(255,255,255,0.3)'
                }}>
                    <div style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        animation: 'float 4s ease-in-out infinite',
                        animationDelay: '0.5s'
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                    </div>
                </div>
                
                <p style={{
                    fontSize: '1.3rem',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: '1.8',
                    backdropFilter: 'blur(5px)',
                    background: 'rgba(255,255,255,0.1)',
                    padding: '20px',
                    borderRadius: '15px'
                }}>
                    SoochnaPreneur is an initiative aimed at empowering individuals through information and resources.
                    We bridge the gap between knowledge and opportunity to create sustainable change.
                </p>
            </div>
        </div>
    );
};

export default Branding;