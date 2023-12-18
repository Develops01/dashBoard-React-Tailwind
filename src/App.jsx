import StandNav from "./components/standNav";
import UserTable from "./components/userTable";
import TopNav from "./components/topNav";

function App() {
  return (
    <>
      <div className="rtl w-screen h-screen ">
        <div className="flex flex-row w-full">
          <StandNav />
          <div className="flex flex-col w-full">
            <TopNav />
            <div className="flex justify-center items-center w-full h-full">
              <UserTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
