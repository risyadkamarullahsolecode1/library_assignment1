import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center p-3">
      <p>&copy; Library Management System</p>
      <nav>
        <a href="/" className="mx-auto">Home</a>
        <a href="/about" className="mx-auto">About</a>
        <a href="/contact" className="mx-auto">Contact</a>
      </nav>
    </footer>
  );
};

export default Footer;
