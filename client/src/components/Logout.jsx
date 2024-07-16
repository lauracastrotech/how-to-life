import React from 'react';

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    onLogout();
    window.location.href = '/'; 
  };

  return (
    <div>
      <h2>Logging out...</h2>
      <button onClick={handleLogout}>Confirm Logout</button>
    </div>
  );
};

export default Logout;