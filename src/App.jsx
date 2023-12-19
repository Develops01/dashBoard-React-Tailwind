import StandNav from "./components/standNav";
import UserTable from "./components/userTable";
import TopNav from "./components/topNav";
// bef
function App() {
  return (
    <>
      <div className="rtl w-full dark:bg-slate-700 ">
        <div className="flex flex-row w-full">
          <StandNav />
          <div className="flex flex-col w-full ">
            <TopNav />
            <div className=" flex justify-center items-center w-full h-full">
              <UserTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
