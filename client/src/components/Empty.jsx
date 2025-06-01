import React from "react";

const Empty = () => {
  // Inline CSS for animation
  const textStyles = {
    display: "inline-block",
    fontSize: "5vw", // Responsive font size
    fontWeight: "bold",
    background: "linear-gradient(270deg, hsl(45, 100%, 72%) 0%, hsl(45, 100%, 72%) 100%)",
    backgroundClip: "text",
    color: "transparent",
    animation: "colorChange 3s linear infinite, bounce 2s infinite",
    textAlign: "center", // Center text inside the container
  };

  const containerStyles = {
    display: "flex",
    alignItems: "center", // Center vertically
    justifyContent: "center", // Center horizontally
    height: "100vh", // Full viewport height
    width: "100vw", // Full viewport width
    margin: "0", // Remove default margin
    padding: "20px", // Adds some padding for small screens
    boxSizing: "border-box", // Include padding in the element's total width and height
  };

  return (
    <div style={containerStyles}>
      <h2 className="nothing flex-center" style={textStyles}>
        Nothing to show
      </h2>

      {/* Adding keyframes animation */}
      <style>
        {`
          @keyframes colorChange {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>
    </div>
  );
};

export default Empty;
