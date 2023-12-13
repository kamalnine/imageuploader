// import React, { useState } from 'react';

// const ImageUploader = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     try {
//       if (!selectedFile) {
//         console.error('Please select a file');
//         return;
//       }

//       const formData = new FormData();
//       formData.append('file', selectedFile);
//       formData.append('fileName', selectedFile.name);

//       const response = await fetch('https://localhost:7282/api/uploader/uploadFile', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         console.log('Image uploaded successfully');
       
//         // Handle success, e.g., show a success message to the user.
//       } else {
//         console.error('Failed to upload image');
//         // Handle errors, e.g., show an error message to the user.
//       }
//     } catch (error) {
//       console.error('An error occurred while uploading the image', error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload Image</button>
//     </div>
//   );
// };

// export default ImageUploader;
import React, { useState } from 'react';

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const droppedFile = event.dataTransfer.files[0];
    setSelectedFile(droppedFile);
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        console.error('Please select a file');
        return;
      }

      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('fileName', selectedFile.name);

      const response = await fetch('https://localhost:7282/api/uploader/uploadFile', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Image uploaded successfully');

        // Handle success, e.g., show a success message to the user.

        // Reset the selectedFile state to null after successful upload
        setSelectedFile(null);
      } else {
        console.error('Failed to upload image');
        // Handle errors, e.g., show an error message to the user.
      }
    } catch (error) {
      console.error('An error occurred while uploading the image', error);
    }
  };

  return (
    <div>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center', cursor: 'pointer' }}
      >
        <p>Drag and drop a file here, or</p>
        <input type="file" onChange={handleFileChange} />
      </div>
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default ImageUploader;

