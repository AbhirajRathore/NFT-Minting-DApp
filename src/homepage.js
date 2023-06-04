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
export function homepage() {
    
    
}