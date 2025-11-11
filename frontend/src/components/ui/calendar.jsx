import React from "react";

export function Calendar({ value, onChange, className = "" }) {
    return (
        <input
            type="date"
            value={value}
            onChange={onChange}
            className={`px-3 py-2 border rounded-md text-sm 
      focus:outline-none focus:ring-2 focus:ring-purple-400 border-gray-300 ${className}`}
        />
    );
}
