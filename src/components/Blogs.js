import React, { useState } from 'react';
import './styles.css';

const Blogs = () => {
    const [activeTab, setActiveTab] = useState('all');
    
    const blogPosts = [
        {
            id: 1,
            title: "Empowering Rural Entrepreneurs Through Digital Tools",
            excerpt: "How our digital literacy programs are transforming rural businesses...",
            category: "success-stories",
            date: "May 15, 2023",
            image: "/path/to/image1.jpg"
        },
        {
            id: 2,
            title: "The Future of Information Access in Developing Regions",
            excerpt: "Exploring innovative approaches to bridge the digital divide...",
            category: "insights",
            date: "April 28, 2023",
            image: "/path/to/image2.jpg"
        },
        {
            id: 3,
            title: "Meet Our 2023 SoochnaPreneur Fellows",
            excerpt: "Introducing the exceptional individuals driving change in their communities...",
            category: "updates",
            date: "March 10, 2023",
            image: "/path/to/image3.jpg"
        }
    ];

    return (
        <div className="section">
            <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
                <h1 className="section-title">Latest Blogs</h1>
                <p style={{textAlign: 'center', marginBottom: '40px', fontSize: '1.2rem'}}>
                    Insights, success stories, and updates from the SoochnaPreneur initiative.
                </p>
                
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '40px',
                    flexWrap: 'wrap',
                    gap: '10px'
                }}>
                    {['all', 'success-stories', 'insights', 'updates'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                padding: '10px 20px',
                                borderRadius: '50px',
                                background: activeTab === tab ? 'var(--gradient)' : '#eee',
                                color: activeTab === tab ? 'white' : 'var(--dark)',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                textTransform: 'capitalize',
                                fontWeight: '600'
                            }}
                        >
                            {tab.replace('-', ' ')}
                        </button>
                    ))}
                </div>
                
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '30px'
                }}>
                    {blogPosts
                        .filter(post => activeTab === 'all' || post.category === activeTab)
                        .map(post => (
                            <div 
                                key={post.id} 
                                className="card"
                                style={{
                                    padding: '0',
                                    overflow: 'hidden',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}
                            >
                                <div style={{
                                    height: '200px',
                                    background: `url(${post.image}) center/cover`,
                                    position: 'relative'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '0',
                                        background: 'var(--gradient)',
                                        color: 'white',
                                        padding: '5px 15px',
                                        fontSize: '0.9rem',
                                        textTransform: 'capitalize'
                                    }}>
                                        {post.category.replace('-', ' ')}
                                    </div>
                                </div>
                                <div style={{padding: '25px'}}>
                                    <h3 style={{fontSize: '1.3rem', marginBottom: '10px'}}>{post.title}</h3>
                                    <p style={{color: '#666', marginBottom: '15px'}}>{post.excerpt}</p>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <span style={{fontSize: '0.9rem', color: '#999'}}>{post.date}</span>
                                        <button style={{
                                            background: 'transparent',
                                            border: 'none',
                                            color: 'var(--primary)',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px'
                                        }}>
                                            Read More
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;