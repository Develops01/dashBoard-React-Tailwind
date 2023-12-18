// AvatarDropdown.jsx
import { useState, useEffect, useRef } from "react";
import avatarImage from "../assets/photo_2023-11-25_10-25-13.jpg";
const AvatarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Implement logout logic here
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-10 inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 hover:bg-gray-700 focus:outline-none "
        onClick={toggleDropdown}
      >
        <img
          className="h-20 w-20 rounded-full object-cover"
          src={avatarImage}
          alt="User Avatar"
        />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg dark:bg-slate-800 dark:border-slate-600  dark:border bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <button
              onClick={() => console.log("Go to Profile")}
              className=" text-start w-full px-4 py-2 text-sm dark:text-white text-gray-700 dark:hover:bg-slate-700 hover:bg-gray-100 transition duration-300 ease-in-out"
            >
              پروفایل
            </button>
            <button
              onClick={() => console.log("Open Settings")}
              className="text-start w-full px-4 py-2 text-sm dark:text-white text-gray-700 dark:hover:bg-slate-700 hover:bg-gray-100 transition duration-300 ease-in-out"
            >
              تنظیمات
            </button>
          </div>
          <div className="border-t dark:border-slate-600 border-gray-100"></div>
          <div className="py-1">
            <button
              onClick={handleLogout}
              className="text-start w-full px-4 py-2 text-sm text-red-500 dark:hover:bg-slate-700 hover:bg-gray-100 transition duration-300 ease-in-out"
            >
              خروج
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;
