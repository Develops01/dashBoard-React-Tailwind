// YourComponent.js

import SearchableTable from "./searchAbleTable";

const UserTable = () => {
  const tableHeaders = ["Name", "Age", "Country"];
  const tableData = [
    { id: 1, name: "John Doe", age: 30, country: "USA" },
    { id: 2, name: "Jane Smith", age: 25, country: "Canada" },
    // Add more data as needed
  ];

  const renderTableRow = (item) => {
    const name = String(item.name || ""); // Convert to string, handle undefined/null
    const age = String(item.age || ""); // Convert to string, handle undefined/null
    const country = String(item.country || ""); // Convert to string, handle undefined/null

    return [
      <td key="name">{name}</td>,
      <td key="age">{age}</td>,
      <td key="country">{country}</td>,
      // Add more cells for additional columns
    ];
  };
  return (
    <div>
      <SearchableTable
        headers={tableHeaders}
        data={tableData}
        rowRenderer={renderTableRow}
      />
    </div>
  );
};

export default UserTable;
