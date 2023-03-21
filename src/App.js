<<<<<<< HEAD
import React from 'react';
import OurPurpose from './Pages/ourPurpose';
import Home from './Pages/home';
import JamLounge from './Pages/jamLounge';
import "./dashBoard.js"
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import RecordStore from './Pages/recordStore';
 
function DashBoard() {
  
    <div className="Pages" > 
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/jamLounge" component={JamLounge} />
          <Route exact path="/shop" component={DashBoard} />
          <Route exact path="/ourPurpose" component={OurPurpose} />
          <Route exact path="/recordStore" component={RecordStore} />
          <Route exact path="*" component={RecordStore} />
        </Routes>
      </BrowserRouter>
    </div>;
}
export default DashBoard;
=======
import React, { useState } from 'react';
import GemGrooveThumb from './GemGrooveThumb.jpg';
import { HashRouter } from 'react-router-dom';

  const LogoApp = () => {
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);
  const [audioFile, setAudioFile] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();

    if (event.dataTransfer.files && event.dataTransfer.files.length) {
      const file = event.dataTransfer.files[0];
      setAudioFile(file);
    }
  };

  const handleSave = () => {
    // WIP - Need to send to NFT.Storage and return IPFS URL
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  

  const handleClick = async () => {
  if (typeof window.ethereum === 'undefined') {
    alert('Please install MetaMask to connect to your wallet.');
    return;
  }

  // Check if the user is already connected to a wallet
  if (window.ethereum.selectedAddress) {
    alert('You are already connected to a wallet!');
    setIsMetaMaskConnected(true);
    return;
  }

  try {
    await window.ethereum.enable();
    setIsMetaMaskConnected(true);
  } catch (error) {
    console.error(error);
  }
};


  const handleMintClick = () => {
    if (!isMetaMaskConnected) {
      alert("Please connect to MetaMask first.");
      return;
    }
    alert("Minting Jams soon...hang tight!");
  };

  return (
    <div style={{backgroundColor: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <img src={GemGrooveThumb} alt="GemGroove Thumb" />
      <p style={{color: 'orange', marginTop: '20px'}}>Drag and Drop it like its hot!</p>
      <input
        type="text"
        value={audioFile}
        onDrop={handleDrop}
        onDragOver={event => event.preventDefault()}
        style={{width: '100px', height: '50px',padding: '10px 20px', border: '2px solid orange', borderRadius: '20px'}}
      />
      {audioFile ? (
        <>
          <p>{audioFile.name}</p>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <p>Drop an audio file here</p>
      )}
      <button onClick={handleClick} style={{backgroundColor: 'orange', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '20px', position: 'fixed', bottom: '20px', left: '20px'}}>
        Connect Wallet
      </button>
      <button onClick={handleMintClick} style={{backgroundColor: 'orange', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', marginTop: '1px'}}>
        Mint My Jam</button>
        <button onClick={handleMintClick} style={{backgroundColor: 'orange', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '20px', marginTop: '20px', position: 'fixed',top:'70px'}}>
        Our Purpose</button>
      <a href="mailto:Hderek22@icloud.com">
        <button style={{backgroundColor: 'orange', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '20px', marginTop: '20px', position: 'fixed', bottom: '20px', right: '20px'}}>
          Contact GemGroove
        </button>
      </a>
    </div>
  );
};



export default LogoApp;
>>>>>>> 4f8f09776995cda3bf5b98dd5e2834c1fb617d60
