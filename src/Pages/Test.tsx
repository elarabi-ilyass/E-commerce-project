import React, { useState } from 'react';

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setError(null); // Clear any previous errors
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedFile) {
      setError("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    fetch('http://localhost:5000/users', { // Your backend endpoint
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) { // Check for HTTP errors (4xx or 5xx)
          return response.json().then(err => {throw new Error(err.message || response.statusText)}); // Extract error message from JSON if available
        }
        return response.json();
      })
      .then(data => {
        if (data.success) {
          setImageUrl(data.imageUrl);
        } else {
          setError(data.message || "Upload failed.");
        }
      })
      .catch(err => {
        console.error("Upload error:", err);
        setError(err.message || "An error occurred during upload.");
      });
  };

  return (
    <div className='p-40'>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" onChange={handleFileChange} />
        <button type="submit">Upload</button>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
      </form>

      {imageUrl && (
        <div>
          <img src={imageUrl} alt="Uploaded Image" />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;