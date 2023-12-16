import StandNav from "./components/standNav";
import UserTable from "./components/userTable";

function App() {
  return (
    <>
      <div className="rtl w-screen h-screen bg-rose-400">
        <StandNav />
        <UserTable />
      </div>
    </>
  );
}

export default App;
