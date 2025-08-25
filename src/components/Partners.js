import React from 'react';
import './styles.css';

const Partners = () => {
    const partners = [
        {
            name: "TechForGood Foundation",
            logo: "/path/to/partner1.png",
            description: "Supporting technology initiatives for social impact"
        },
        {
            name: "Digital Empowerment Network",
            logo: "/path/to/partner2.png",
            description: "Promoting digital literacy across communities"
        },
        {
            name: "Innovate India",
            logo: "/path/to/partner3.png",
            description: "Fostering innovation and entrepreneurship"
        },
        {
            name: "Rural Growth Alliance",
            logo: "/path/to/partner4.png",
            description: "Driving economic growth in rural areas"
        },
        {
            name: "Women in Tech",
            logo: "/path/to/partner5.png",
            description: "Empowering women through technology education"
        }
    ];

    return (
        <div className="section" style={{background: '#f9f9f9'}}>
            <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
                <h1 className="section-title">Our Partners</h1>
                <p style={{textAlign: 'center', marginBottom: '50px', fontSize: '1.2rem'}}>
                    We collaborate with organizations that share our vision of empowering communities through information and technology.
                </p>
                
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '30px'
                }}>
                    {partners.map((partner, index) => (
                        <div 
                            key={index} 
                            className="card"
                            style={{
                                textAlign: 'center',
                                padding: '30px',
                                transition: 'all 0.3s ease',
                                transform: `rotate(${index % 2 === 0 ? '1deg' : '-1deg'})`
                            }}
                        >
                            <div style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                background: 'white',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                margin: '0 auto 20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '15px',
                                overflow: 'hidden'
                            }}>
                                <img 
                                    src={partner.logo} 
                                    alt={partner.name} 
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                        filter: 'grayscale(100%)',
                                        opacity: '0.7',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                            </div>
                            <h3 style={{
                                fontSize: '1.3rem',
                                marginBottom: '10px',
                                color: 'var(--primary)'
                            }}>
                                {partner.name}
                            </h3>
                            <p style={{color: '#666'}}>
                                {partner.description}
                            </p>
                        </div>
                    ))}
                </div>
                
                <div style={{
                    marginTop: '50px',
                    textAlign: 'center'
                }}>
                    <h2 style={{
                        fontSize: '1.5rem',
                        marginBottom: '20px'
                    }}>
                        Interested in Partnering With Us?
                    </h2>
                    <p style={{
                        maxWidth: '700px',
                        margin: '0 auto 30px',
                        fontSize: '1.1rem'
                    }}>
                        We're always looking to expand our network of partners who share our mission of empowering communities through information access.
                    </p>
                    <button className="btn btn-primary" style={{
                        padding: '15px 40px',
                        fontSize: '1.1rem'
                    }}>
                        Become a Partner
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Partners;