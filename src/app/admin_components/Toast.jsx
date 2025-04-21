// Toast.js
import React, { useEffect } from "react";

function Toast({ message, showToast, hideToast, type = "success" }) {
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        hideToast(); // Hide after 3 seconds
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showToast, hideToast]);

  // Conditional classes based on `type` prop
  const toastStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500", // Example for info style
  };

  return (
    showToast && (
      <div className={`fixed top-4 right-4 text-white p-4 rounded-lg shadow-lg ${toastStyles[type]}`} style={{ zIndex: 9999 }}>
        <p>{message}</p>
      </div>
    )
  );
}

export default Toast;
