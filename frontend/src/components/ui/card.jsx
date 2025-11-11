import React from "react";

export function Card({ children, className = "", ...props }) {
    return (
        <div
            {...props}
            className={`rounded-xl shadow-md bg-white text-black ${className}`}
        >
            {children}
        </div>
    );
}

export function CardContent({ children, className = "", ...props }) {
    return (
        <div {...props} className={`p-6 ${className}`}>
            {children}
        </div>
    );
}
