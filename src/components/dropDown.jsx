// Dropdown.js
import { useState } from "react";
import PropTypes from "prop-types";

const Dropdown = ({ items, menuText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex w-full justify-between  items-center  py-3 text-gray-700 dark:text-white dark:hover:text-slate-300 hover:text-gray-900 focus:outline-none dark:focus:text-white focus:text-gray-900 transition duration-300 ease-in-out"
      >
        <span>{menuText}</span>
        <svg
          className={`w-4 h-4 ml-2 transition transform ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 right-0 mt-2 space-y-2 dark:bg-slate-800 bg-white border dark:border-slate-600 border-gray-300 rounded shadow-lg w-48">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="block px-4 py-2 text-sm dark:text-white text-gray-700 dark:hover:bg-slate-700 hover:bg-gray-100 transition duration-300 ease-in-out"
            >
              {item.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

// proptype validation
Dropdown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  menuText: PropTypes.string.isRequired,
};

export default Dropdown;
