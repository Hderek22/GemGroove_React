import React, { useState } from 'react';

const AudioUploader = () => {
  const [audioFile, setAudioFile] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();

    if (event.dataTransfer.files && event.dataTransfer.files.length) {
      const file = event.dataTransfer.files[0];
      setAudioFile(file);
    }
  };

  const handleSave = () => {
    // Save the audio file to your desired location, using a back-end or a front-end library
    // ...
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={event => event.preventDefault()}
      style={{ backgroundColor: 'lightgray', height: '100px', textAlign: 'center' }}
    >
      {audioFile ? (
        <>
          <p>{audioFile.name}</p>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <p>Drop an audio file here</p>
      )}
    </div>
  );
};

export default AudioUploader;
