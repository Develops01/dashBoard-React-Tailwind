// UserTable.js
import { useState, useEffect } from "react";
import axios from "axios";
import SearchableTable from "./searchableTable";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderTableRow = (user) => {
    const name = String(user.name || "");
    const username = String(user.username || "");
    const email = String(user.email || "");

    return [
      <td key="name">{name}</td>,
      <td key="username">{username}</td>,
      <td key="email">{email}</td>,
    ];
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <SearchableTable
        headers={["Name", "Username", "Email"]}
        data={users}
        rowRenderer={renderTableRow}
      />
    </div>
  );
};

export default UserTable;
