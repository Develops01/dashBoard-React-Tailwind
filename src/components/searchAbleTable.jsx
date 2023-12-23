// SearchableTable.js
import { useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "./searchBar";

const SearchableTable = ({ headers, data }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredData = data.filter((item) => {
    const rowValue = headers
      .map((header) => String(item[header.toLowerCase()]))
      .join(" ")
      .toLowerCase();

    return rowValue.includes(searchQuery);
  });

  return (
    <div className=" w-full border rounded-xl bg-slate-100  sm:container sm:mx-auto sm:p-4 shadow-lg shadow-sky-200 dark:shadow-slate-800 dark:bg-gray-700 dark:border-slate-800">
      <div className="w-full sm:mb-4">
        <SearchBar placeholder="Search" onChange={handleSearch} />
      </div>
      <div className="w-full overflow-x-auto">
        <table className=" w-full overflow-auto block min-w-full dark:bg-gray-600  bg-white border border-gray-300">
          <thead className="w-full">
            <tr className="dark:bg-gray-800  bg-gray-100">
              {headers.map((header) => (
                <th
                  key={header.toLowerCase()}
                  className="sm:py-2 py-1 px-2 ove sm:px-4 border-b text-right font-bold text-sm dark:text-white  text-gray-700"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={index}
                className=" w-1/4 dark:hover:bg-gray-700 hover:bg-gray-50"
              >
                {headers.map((header) => (
                  <td
                    key={header.toLowerCase()}
                    className="text-[12px] sm:py-2 sm:px-4  border-b text-sm dark:text-slate-200 text-gray-700"
                  >
                    {item[header.toLowerCase()]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

SearchableTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.array.isRequired,
  rowRenderer: PropTypes.func.isRequired,
};

export default SearchableTable;
