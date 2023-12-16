// SearchBar.js
import PropTypes from "prop-types";
const SearchBar = ({ onChange }) => {
  return (
    <div className="relative text-gray-600">
      <input
        type="search"
        name="search"
        placeholder="Search"
        onChange={(e) => onChange(e.target.value)}
        className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
      />
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
        <svg
          className="h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M21.707 20.293l-3.85-3.85A8.428 8.428 0 0 0 20 11.5 8.5 8.5 0 1 0 11.5 20c2.02 0 3.868-.735 5.293-1.95l3.85 3.85 1.414-1.414zM3 11.5a8.5 8.5 0 0 1 13.793-6.65l1.414 1.414A10.455 10.455 0 0 0 11.5 9a10.45 10.45 0 0 0-5.707 1.65A8.497 8.497 0 0 1 3 11.5z" />
        </svg>
      </button>
    </div>
  );
};
SearchBar.propTypes = { onChange: PropTypes.func.isRequired };
export default SearchBar;
