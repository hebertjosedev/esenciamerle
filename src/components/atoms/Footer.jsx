import React from 'react'
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer bg-red-800 w-full max-width p-4 text-center text-white">
      <h3 className="text-lg mb-4">Siguenos en instagram:</h3>
      <a href="https://www.instagram.com/esenciamerle?igsh=MTM5OGd5a2VtbnpoNA==">
        <FaInstagram className="m-auto h-7 text-2xl mb-5" />
      </a>
      <div>
        <span>Copyright 2024 © </span>
        <span className="">
          {" "}
          <strong>Perfumes Esencia Merle</strong>
        </span>
      </div>
    </div>
  );
}

export default Footer