import React from 'react';
import './styles.css';

const Impact = () => {
    const stats = [
        { value: "1,000+", label: "Individuals Trained" },
        { value: "200+", label: "Businesses Created" },
        { value: "50+", label: "Communities Reached" },
        { value: "10+", label: "Partner Organizations" }
    ];

    const testimonials = [
        {
            quote: "SoochnaPreneur has changed my life. I now run my own business and can support my family.",
            author: "Priya Sharma, SoochnaPreneur Graduate",
            role: "Small Business Owner"
        },
        {
            quote: "The digital skills I learned helped me expand my customer base beyond my village.",
            author: "Rahul Patel",
            role: "Local Artisan"
        },
        {
            quote: "This initiative brought our community together and opened new opportunities we never imagined.",
            author: "Community Leader",
            role: "Village Representative"
        }
    ];

    return (
        <div className="section">
            <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
                <h1 className="section-title">Our Impact</h1>
                
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '30px',
                    marginBottom: '60px'
                }}>
                    {stats.map((stat, index) => (
                        <div 
                            key={index} 
                            className="card"
                            style={{
                                textAlign: 'center',
                                padding: '30px 20px',
                                transition: 'all 0.5s ease',
                                transform: `rotate(${index % 2 === 0 ? '1deg' : '-1deg'})`
                            }}
                        >
                            <div style={{
                                fontSize: '3rem',
                                fontWeight: '700',
                                background: 'var(--gradient)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                marginBottom: '10px'
                            }}>
                                {stat.value}
                            </div>
                            <div style={{fontSize: '1.2rem'}}>{stat.label}</div>
                        </div>
                    ))}
                </div>
                
                <div style={{marginBottom: '60px'}}>
                    <h2 style={{
                        fontSize: '1.8rem',
                        marginBottom: '30px',
                        textAlign: 'center',
                        position: 'relative',
                        display: 'inline-block',
                        left: '50%',
                        transform: 'translateX(-50%)'
                    }}>
                        Success Stories
                    </h2>
                    
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '30px'
                    }}>
                        {testimonials.map((testimonial, index) => (
                            <div 
                                key={index} 
                                className="card"
                                style={{
                                    padding: '30px',
                                    position: 'relative',
                                    overflow: 'visible'
                                }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: '-20px',
                                    left: '20px',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'var(--gradient)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '1.5rem'
                                }}>
                                    ”
                                </div>
                                <p style={{
                                    fontStyle: 'italic',
                                    fontSize: '1.1rem',
                                    marginBottom: '20px',
                                    lineHeight: '1.8'
                                }}>
                                    {testimonial.quote}
                                </p>
                                <div>
                                    <div style={{
                                        fontWeight: '600',
                                        color: 'var(--primary)'
                                    }}>
                                        {testimonial.author}
                                    </div>
                                    <div style={{
                                        fontSize: '0.9rem',
                                        color: '#666'
                                    }}>
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div style={{
                    background: 'var(--gradient)',
                    padding: '40px',
                    borderRadius: '15px',
                    color: 'white',
                    textAlign: 'center'
                }}>
                    <h2 style={{fontSize: '1.8rem', marginBottom: '20px'}}>Ready to Make an Impact?</h2>
                    <p style={{fontSize: '1.2rem', marginBottom: '30px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
                        Join our growing community of changemakers and be part of the movement that's transforming lives through information and technology.
                    </p>
                    <button className="btn btn-primary" style={{
                        fontSize: '1.1rem',
                        padding: '15px 40px',
                        border: '2px solid white'
                    }}>
                        Get Involved Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Impact;