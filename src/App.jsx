import StandNav from "./components/standNav";
import UserTable from "./components/userTable";
import TopNav from "./components/topNav";
// bef
function App() {
  return (
    <>
      <div className="flex flex-col w-screen ">
        <TopNav />
        <StandNav />
        <div className=" w-full h-screen pt-24 bg-slate-700  flex justify-center items-center ">
          <UserTable />
        </div>
      </div>
    </>
  );
}

export default App;
