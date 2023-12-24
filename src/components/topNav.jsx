import AvatarDropdown from "./AvatarDropdown";
import DarkModeToggle from "./DarkModeToggle";
const TopNav = () => {
  return (
    <>
      <div className=" pl-10 flex fixed w-screen justify-end shadow-lg shadow-sky-200 dark:shadow-slate-900 bg-white dark:bg-slate-800 z-10 ">
        <DarkModeToggle />
        <AvatarDropdown />
      </div>
    </>
  );
};
export default TopNav;
