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
      <div className="flex-col h-screen sm:pt-24 pt-20 dark:bg-slate-700  flex justify-center items-center ">
        <UserTable />
        <BlogForm />
      </div>
      <div className="h-screen sm:pt-24 pr-28 py-96 dark:bg-slate-700  flex justify-center items-center "></div>

      <Footer />
    </>
  );
}

export default App;
