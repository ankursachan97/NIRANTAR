import React from 'react';
// import './styles.css';
import './styles.css';

const About = () => {
    return (
        <div className="section animated-bg" style={{color: 'white'}}>
            <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
                <div className="card" style={{background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)'}}>
                    <h1 className="section-title" style={{color: 'white'}}>About SoochnaPreneur</h1>
                    <p style={{fontSize: '1.2rem', marginBottom: '30px'}}>
                        SoochnaPreneur is an initiative aimed at empowering individuals through information and resources. 
                        Our mission is to provide access to vital information that can help entrepreneurs and communities thrive.
                    </p>
                    <h2 style={{fontSize: '1.8rem', margin: '30px 0 20px', color: 'white'}}>Our Objectives</h2>
                    <ul style={{listStyle: 'none'}}>
                        <li style={{padding: '15px', marginBottom: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', position: 'relative', paddingLeft: '50px', transition: 'all 0.3s ease'}}>
                            <span style={{position: 'absolute', left: '15px', top: '15px', width: '25px', height: '25px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>✓</span>
                            To promote entrepreneurship and innovation.
                        </li>
                        <li style={{padding: '15px', marginBottom: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', position: 'relative', paddingLeft: '50px', transition: 'all 0.3s ease'}}>
                            <span style={{position: 'absolute', left: '15px', top: '15px', width: '25px', height: '25px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>✓</span>
                            To provide resources and support for aspiring entrepreneurs.
                        </li>
                        <li style={{padding: '15px', marginBottom: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', position: 'relative', paddingLeft: '50px', transition: 'all 0.3s ease'}}>
                            <span style={{position: 'absolute', left: '15px', top: '15px', width: '25px', height: '25px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>✓</span>
                            To create a network of partners and stakeholders committed to community development.
                        </li>
                        <li style={{padding: '15px', marginBottom: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', position: 'relative', paddingLeft: '50px', transition: 'all 0.3s ease'}}>
                            <span style={{position: 'absolute', left: '15px', top: '15px', width: '25px', height: '25px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>✓</span>
                            To raise awareness about the importance of information access in driving economic growth.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;