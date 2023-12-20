import StandNav from "./components/standNav";
import UserTable from "./components/userTable";
import TopNav from "./components/topNav";
// bef
function App() {
  return (
    <>
      <TopNav />
      <StandNav />
      <div className="h-screen sm:pt-24 dark:bg-slate-700  flex justify-center items-center ">
        <UserTable />
      </div>
    </>
  );
}

export default App;
