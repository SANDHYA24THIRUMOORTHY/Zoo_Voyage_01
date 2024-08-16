import React, { useEffect, useState } from "react";
import { imageDb } from './firebaseConfig';
import { getDownloadURL, listAll, ref, uploadBytes, deleteObject } from "firebase/storage";
import { v4 } from "uuid";
import './FirebaseImg.css'; // Import the CSS file

function FirebaseImg() {
    const [img, setImg] = useState(null);
    const [imgUrl, setImgUrl] = useState([]);
    const [imgRefs, setImgRefs] = useState([]);
    const [showUpload, setShowUpload] = useState(false);

    // Handle file upload
    const handleClick = () => {
        if (img !== null) {
            const imgRef = ref(imageDb, `files/${v4()}`);
            uploadBytes(imgRef, img).then(value => {
                getDownloadURL(value.ref).then(url => {
                    setImgUrl(prevUrls => [...prevUrls, url]);
                    setImgRefs(prevRefs => [...prevRefs, value.ref]);
                });
            }).catch(error => {
                console.error('Error uploading file:', error);
            });
            setImg(null);
            setShowUpload(false);
        }
    };

    // Handle file deletion
    const handleDelete = (imgRef) => {
        deleteObject(imgRef).then(() => {
            setImgRefs(prevRefs => {
                const index = prevRefs.indexOf(imgRef);
                if (index > -1) {
                    // Remove the reference and URL
                    setImgUrl(prevUrls => prevUrls.filter((_, i) => i !== index));
                    return prevRefs.filter((_, i) => i !== index);
                }
                return prevRefs;
            });
        }).catch(error => {
            console.error('Error deleting image:', error);
        });
    };

    useEffect(() => {
        listAll(ref(imageDb, "files")).then(imgs => {
            const urlPromises = imgs.items.map(item => {
                return getDownloadURL(item).then(url => {
                    return { url, ref: item };
                });
            });

            Promise.all(urlPromises).then(results => {
                setImgUrl(results.map(result => result.url));
                setImgRefs(results.map(result => result.ref));
            }).catch(error => {
                console.error('Error fetching image URLs:', error);
            });
        }).catch(error => {
            console.error('Error listing images:', error);
        });
    }, []);

    return (
        <div className="vlog-upload-page">
            <header className="header-vlog">
                <h1>Vlog Upload Page</h1>
            </header>
            <main className="content">
                <div className="image-gallery">
                    {
                        imgUrl.map((dataVal, index) => (
                            <div key={dataVal} className="image-item">
                                <img src={dataVal} className="image-preview" alt={`img-${index}`} />
                                <button className="delete-button" onClick={() => handleDelete(imgRefs[index])}>Delete</button>
                            </div>
                        ))
                    }
                </div>
                {showUpload && (
                    <div className="upload-form">
                        <input type="file" className="file-input" onChange={(e) => setImg(e.target.files[0])} />
                        <button className="upload-button" onClick={handleClick}>Upload</button>
                    </div>
                )}
                <button className="plus-button" onClick={() => setShowUpload(!showUpload)}>
                    {showUpload ? 'x' : '+'}
                </button>
            </main>
            <footer className="footer-vlog">
                <p>&copy; 2024 ZooVoyage. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default FirebaseImg;
