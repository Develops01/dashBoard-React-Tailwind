import StandNav from "./components/standNav";
import UserTable from "./components/userTable";
import TopNav from "./components/topNav";
import Footer from "./components/footer";
import BlogForm from "./components/blogForm";
function App() {
  return (
    <>
      <TopNav />
      <StandNav />
      <div className="h-screen sm:pt-24 pt-20 dark:bg-slate-700  flex justify-center items-center ">
        <UserTable />
      </div>
      <div className="h-screen sm:pt-24 pr-28 pt-20 dark:bg-slate-700  flex justify-center items-center ">
        <BlogForm />
      </div>

      <Footer />
    </>
  );
}

export default App;
