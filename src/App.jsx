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
      <div className="  pt-28 bg-gradient-to-bl from-rose-300 via-purple-400 to-sky-300 dark:bg-none  dark:bg-slate-700  flex justify-center items-center ">
        <BlogForm />
      </div>

      <Footer />
    </>
  );
}

export default App;
