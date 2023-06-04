import React from 'react';
import { useEffect, useState, useRef } from "react";
import contract from "./NFT.json";
import { ethers } from "ethers";
import background from "./utils/CBHome.png";
import background1 from "./utils/cyberbot1.svg";
import background2 from "./utils/cyberbot11.svg";
import { getJsonWalletAddress } from "ethers/lib/utils";
import 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './ImageUploadForm.css';
import building from "./utils/mbmBuilding.jpg";
import logo from "./utils/logombm.gif";
const contractAddress = "0x8114E8b01772d1D651dd1E067fa7aba07a98E8D6";
const abi = contract.abi;


export function ImageUploadForm() {
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit =async (event) => {
    event.preventDefault();
    
    
    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Image uploaded successfully');
        // Add any additional logic here, such as showing a success message or redirecting to a new page
      } else {
        console.error('Failed to upload image');
        // Add any error handling logic here, such as showing an error message to the user
      }
    } catch (error) {
      console.error('Error uploading image', error);
      // Add any error handling logic here, such as showing an error message to the user
    }
  };

  return (
    <div className="image-upload-form" >
      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={logo} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={building} class="d-block w-100" alt="..."/>
    </div>
    
  </div>
  
</div>
      <p></p>
      <h2 className="form-heading text-white">Degree to NFT</h2>
      
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label className="form-label text-white">Name</Form.Label>
          <Form.Control type="text" placeholder="Enter title" value={title} onChange={handleTitleChange} />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label className="form-label text-white">Enrolement Number</Form.Label>
          <Form.Control as="textarea" placeholder="Enter enrolement number" value={description} onChange={handleDescriptionChange} />
        </Form.Group>

        {/* <Form.Group controlId="imageFile">
          <Form.Label className="form-label">Upload Image</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
        </Form.Group> */}

        <Button variant="primary" type="submit" className="submit-button" onClick={handleFileChange}>
          Upload
        </Button>
      </Form>
    </div>
  );
}

export default ImageUploadForm;



