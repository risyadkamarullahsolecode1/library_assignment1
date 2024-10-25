import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-center text-white p-3 fixed-bottom">
      <div>
      <p>&copy; Library Management System</p>
      <nav className="container px-4 text-white">
        <a href="/" className="mx-auto p-2 text-white">Home</a>
        <a href="/about" className="mx-auto p-2 text-white">About</a>
        <a href="/contact" className="mx-auto text-white">Contact</a>
      </nav>
      </div>
    </footer>
  );
};

export default Footer;
