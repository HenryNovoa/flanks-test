import { useState } from 'react';
import { uploadFile, usePositions } from '../context/PositionsContext';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const { refreshPositions } = usePositions();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await uploadFile(file);

      if (response.ok) {
        alert('File uploaded successfully');
        refreshPositions();
      } else {
        alert('Failed to upload file');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default FileUpload;
