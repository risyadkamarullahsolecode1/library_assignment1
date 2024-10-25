import React from 'react';

const Header = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <header className="p-3 mb-2 bg-primary text-white text-center fixed-top">
      <div className="container-fluid">
        <h1>Library Assignment Project</h1>
        <p>{`Today's date: ${currentDate}`}</p>
      </div>
    </header>
  );
};

export default Header;
