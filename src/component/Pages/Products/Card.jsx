import { useState } from "react";

const Card = ({ title, description, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-64 h-64 border rounded-md overflow-hidden shadow-lg transition duration-300 ease-in-out transform-gpu hover:shadow-xl hover:-translate-y-1">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div
        className={`absolute top-0 right-0 mt-2 mr-2 flex space-x-2 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <button className="p-2 bg-gray-200 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
        <button className="p-2 bg-gray-200 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 19V8m0 0-7-4-7 4m7-4v11"
            />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div
        className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 transition-opacity duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p className="text-black text-4xl">Hover over to see options</p>
      </div>
    </div>
  );
};

export default Card;
