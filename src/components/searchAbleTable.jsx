// SearchableTable.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";

const SearchableTable = ({ headers, data, rowRenderer }) => {
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
    <div className="border rounded-xl bg-slate-100 container mx-auto p-4">
      <div className="mb-4">
        <SearchBar placeholder="Search" onChange={handleSearch} />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              {headers.map((header) => (
                <th
                  key={header.toLowerCase()}
                  className="py-2 px-4 border-b text-right font-bold text-sm text-gray-700"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {headers.map((header) => (
                  <td
                    key={header.toLowerCase()}
                    className="py-2 px-4 border-b text-sm text-gray-700"
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
