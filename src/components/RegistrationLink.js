import React from 'react';
import './styles.css';

const RegistrationLink = () => {
    return (
        <div className="section" style={{
            background: 'linear-gradient(135deg, rgba(110,72,170,0.1) 0%, rgba(157,80,187,0.1) 100%)',
            textAlign: 'center'
        }}>
            <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>
                <div className="card" style={{
                    padding: '50px',
                    border: 'none',
                    boxShadow: '0 20px 40px rgba(110,72,170,0.15)'
                }}>
                    <h2 style={{
                        fontSize: '2rem',
                        marginBottom: '20px',
                        color: 'var(--primary)'
                    }}>
                        Apply for SoochnaPreneur
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '30px'
                    }}>
                        Join us in making a difference! Register for the SoochnaPreneur initiative and gain access to resources, training, and a supportive community.
                    </p>
                    <a 
                        href="/registration" 
                        className="btn btn-primary"
                        style={{
                            fontSize: '1.1rem',
                            padding: '15px 40px',
                            display: 'inline-block',
                            textDecoration: 'none',
                            animation: 'glow 2s infinite ease-in-out'
                        }}
                    >
                        Register Now
                    </a>
                    
                    <div style={{
                        marginTop: '40px',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '30px',
                        flexWrap: 'wrap'
                    }}>
                        {[
                            { icon: '📚', text: 'Free Resources' },
                            { icon: '👥', text: 'Community Support' },
                            { icon: '💡', text: 'Expert Guidance' }
                        ].map((item, index) => (
                            <div 
                                key={index} 
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    background: 'rgba(110,72,170,0.1)',
                                    padding: '10px 20px',
                                    borderRadius: '50px',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <span style={{fontSize: '1.5rem'}}>{item.icon}</span>
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationLink;