import React from 'react';
import './styles.css';

const Awards = () => {
    const awards = [
        {
            title: "Innovation Excellence Award 2023",
            description: "Recognized for groundbreaking work in digital empowerment",
            year: "2023"
        },
        {
            title: "Community Impact Prize",
            description: "Awarded for significant positive impact on local communities",
            year: "2022"
        },
        {
            title: "Tech for Good Award",
            description: "Honored for using technology to drive social change",
            year: "2021"
        }
    ];

    return (
        <div className="section" style={{background: '#f9f9f9'}}>
            <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
                <h1 className="section-title">Our Awards</h1>
                <p style={{textAlign: 'center', marginBottom: '50px', fontSize: '1.2rem'}}>
                    Recognition of our commitment to empowering communities through information and technology.
                </p>
                
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {awards.map((award, index) => (
                        <div 
                            key={index} 
                            className="card"
                            style={{
                                textAlign: 'center',
                                transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`,
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: 'var(--gradient)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 20px',
                                color: 'white',
                                fontSize: '2rem',
                                fontWeight: 'bold'
                            }}>
                                {award.year}
                            </div>
                            <h3 style={{fontSize: '1.5rem', marginBottom: '15px', color: 'var(--primary)'}}>{award.title}</h3>
                            <p>{award.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Awards;