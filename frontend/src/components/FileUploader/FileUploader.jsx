import React, {useState} from 'react';

const FileUploader = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }
    return (
        <div style={{cursor: 'pointer'}}>
            <input type="file" onChange={handleFileChange} />
            {file && (
                <div>
                    <p>File Name: {file.name}</p>
                    <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
                    <p>Type: {file.type}</p>
                </div>
            )}
        </div>
    );
};

export default FileUploader;
