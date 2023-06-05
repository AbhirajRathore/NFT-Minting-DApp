import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MbmOfficialMint from './MbmOfficialMint'
import ImageUploadForm from './ImageUploadForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const root = ReactDOM.createRoot(document.getElementById('root'));

const Root = () => (
  <Router>
  <React.StrictMode>
    <Routes>
      <Route path="/upload-details" element={<ImageUploadForm />} />
      <Route path="/" element={<App />} />
      <Route path="/mbm-official-mint" element={<MbmOfficialMint />} />
    </Routes>
  </React.StrictMode>
</Router>
);


// root.render(
//   <React.StrictMode>
    
//     {/* <ImageUploadForm/> */}
//     {/* <App/> */}
//     <MbmOfficialMint/>
//   </React.StrictMode>
// );

root.render(<Root />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
