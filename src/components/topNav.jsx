import AvatarDropdown from "./AvatarDropdown";
import DarkModeToggle from "./DarkModeToggle";
const TopNav = () => {
  return (
    <>
      <div className=" flex fixed w-screen justify-end shadow-xl dark:bg-slate-800 ">
        <DarkModeToggle />
        <AvatarDropdown />
      </div>
    </>
  );
};
export default TopNav;
