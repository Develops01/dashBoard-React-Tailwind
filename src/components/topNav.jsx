import AvatarDropdown from "./AvatarDropdown";
import DarkModeToggle from "./DarkModeToggle";
const TopNav = () => {
  return (
    <>
      <div className="flex justify-end dark:bg-slate-800 ">
        <DarkModeToggle />
        <AvatarDropdown />
      </div>
    </>
  );
};
export default TopNav;
