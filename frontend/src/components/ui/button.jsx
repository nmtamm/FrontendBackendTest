import React from "react";

export function Button({ children, className = "", ...props }) {
    return (
        <button
            {...props}
            className={`px-4 py-2 rounded-md font-medium transition-all 
      bg-gray-800 text-white hover:bg-gray-700 active:scale-95 ${className}`}
        >
            {children}
        </button>
    );
}
