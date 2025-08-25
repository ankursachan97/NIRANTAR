import React, { useState } from 'react';
import './styles.css';

const Media = () => {
    const [mediaFile, setMediaFile] = useState(null);
    const [message, setMessage] = useState('');
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (event) => {
        setMediaFile(event.target.files[0]);
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setMediaFile(e.dataTransfer.files[0]);
            e.dataTransfer.clearData();
        }
    };

    const handleUpload = async () => {
        if (!mediaFile) {
            setMessage('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('media', mediaFile);

        try {
            // Simulate upload
            setMessage('Uploading...');
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            setMessage('File uploaded successfully!');
            setMediaFile(null);
        } catch (error) {
            setMessage('An error occurred while uploading the file.');
        }
    };

    return (
        <div className="section">
            <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>
                <h1 className="section-title">Media Gallery</h1>
                
                <div 
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    style={{
                        border: `3px dashed ${isDragging ? 'var(--primary)' : '#ddd'}`,
                        borderRadius: '15px',
                        padding: '40px',
                        textAlign: 'center',
                        marginBottom: '30px',
                        transition: 'all 0.3s ease',
                        background: isDragging ? 'rgba(110, 72, 170, 0.05)' : 'transparent'
                    }}
                >
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'rgba(110, 72, 170, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px'
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="17 8 12 3 7 8"></polyline>
                            <line x1="12" y1="3" x2="12" y2="15"></line>
                        </svg>
                    </div>
                    <h3 style={{marginBottom: '10px', color: 'var(--primary)'}}>
                        {isDragging ? 'Drop your files here' : 'Drag & drop files here'}
                    </h3>
                    <p style={{marginBottom: '20px', color: '#666'}}>
                        or select files from your computer
                    </p>
                    <label style={{
                        display: 'inline-block',
                        padding: '12px 24px',
                        background: 'var(--gradient)',
                        color: 'white',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        transition: 'all 0.3s ease'
                    }}>
                        Browse Files
                        <input 
                            type="file" 
                            onChange={handleFileChange} 
                            style={{display: 'none'}}
                        />
                    </label>
                </div>
                
                {mediaFile && (
                    <div className="card" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '20px',
                        padding: '15px 20px'
                    }}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '8px',
                                background: 'rgba(110, 72, 170, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                                    <polyline points="13 2 13 9 20 9"></polyline>
                                </svg>
                            </div>
                            <div>
                                <div style={{fontWeight: '600'}}>{mediaFile.name}</div>
                                <div style={{fontSize: '0.8rem', color: '#666'}}>
                                    {(mediaFile.size / 1024 / 1024).toFixed(2)} MB
                                </div>
                            </div>
                        </div>
                        <button 
                            onClick={handleUpload}
                            className="btn btn-primary"
                            style={{
                                padding: '8px 20px',
                                fontSize: '0.9rem'
                            }}
                        >
                            Upload
                        </button>
                    </div>
                )}
                
                {message && (
                    <div style={{
                        padding: '15px',
                        background: message.includes('success') ? 'rgba(40, 167, 69, 0.1)' : 'rgba(220, 53, 69, 0.1)',
                        color: message.includes('success') ? 'var(--success)' : 'var(--danger)',
                        borderRadius: '8px',
                        textAlign: 'center',
                        marginTop: '20px',
                        fontWeight: '500'
                    }}>
                        {message}
                    </div>
                )}
                
                <div style={{marginTop: '50px'}}>
                    <h2 style={{
                        fontSize: '1.5rem',
                        marginBottom: '20px',
                        textAlign: 'center'
                    }}>
                        Recent Uploads
                    </h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                        gap: '20px'
                    }}>
                        {[1, 2, 3, 4].map(item => (
                            <div 
                                key={item} 
                                className="card"
                                style={{
                                    padding: '0',
                                    overflow: 'hidden',
                                    height: '200px',
                                    background: `url(https://source.unsplash.com/random/300x300/?entrepreneur,${item}) center/cover`,
                                    position: 'relative'
                                }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    left: '0',
                                    right: '0',
                                    background: 'rgba(0,0,0,0.5)',
                                    color: 'white',
                                    padding: '10px',
                                    fontSize: '0.8rem'
                                }}>
                                    Media {item}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Media;