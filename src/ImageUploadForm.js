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
import axios from 'axios';
const contractAddress = "0x8114E8b01772d1D651dd1E067fa7aba07a98E8D6";
const abi = contract.abi;


export function ImageUploadForm() {
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('')

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit =async (event) => {
    event.preventDefault();
    
    if(!title)
      throw new Error('Name of student is important')
    if(!email)
      throw new Error('Email of student is important')
    if(!description)
      throw new Error('Enrollment Number of student is important')

    try {
      const response = await axios.post(`http://localhost:5000/student/save-details`,{
        name: title,
        email: email,
        enrollmentNumber: description
      })
      window.alert("Details saved")
    } catch (error) {
      window.alert("Something went wrong")
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

        <Form.Group controlId="email">
          <Form.Label className="form-label text-white">email Id</Form.Label>
          <Form.Control as="textarea" placeholder="Enter email id" value={email} onChange={handleEmailChange} />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label className="form-label text-white">Enrollment Number</Form.Label>
          <Form.Control as="textarea" placeholder="Enter enrollment number" value={description} onChange={handleDescriptionChange} />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-button" onClick={handleSubmit}>
          Upload
        </Button>
      </Form>
    </div>
  );
}

export default ImageUploadForm;



