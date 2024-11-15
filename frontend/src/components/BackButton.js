import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            className="fixed top-4 left-4 bg-gray-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
            style={{ zIndex: 1000 }}
        >
            ← Back
        </button>
    );
};

export default BackButton;