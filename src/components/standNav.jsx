import { useState } from "react";
import Dropdown from "./dropDown";
import {
  faHome,
  faComments,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StandNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  const dropdownItems1 = [
    { id: 1, text: "شراره", link: "/" },
    { id: 2, text: "زیره", link: "/about" },
    { id: 3, text: "سمیه", link: "/contact" },
  ];
  const dropdownItems2 = [
    { id: 1, text: "جگر", link: "/" },
    { id: 2, text: "نمک", link: "/about" },
    { id: 3, text: "سنگ", link: "/contact" },
  ];
  const dropdownItems3 = [
    { id: 1, text: "من", link: "/" },
    { id: 2, text: "مقاله", link: "/about" },
    { id: 3, text: "مقوله", link: "/contact" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-7 right-7  shadow-sm shadow-[#BE6779] dark:shadow-white rounded-full p-1 z-50 cursor-pointer"
        onClick={toggleMobileNav}
      >
        <svg
          className="dark:text-white text-[#D4AF37]  fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
      </button>

      {/* desktop Navigation */}
      <div className=" lg:flex flex-col fixed h-screen">
        <ul className="hidden h-full lg:flex flex-col gap-4 w-60 bg-white dark:bg-slate-800 px-6 py-8 ring-1 ring-slate-900/5 shadow-xl dark:text-white">
          <li className="flex justify-center items-center gap-2  cursor-default">
            <p className=" text-xl ">دانشگاه آراد</p>
            <img
              alt="آراد برندینگ"
              className=""
              src="https://aradbranding.com/en/uploads/settings/16688039641546.png"
              width="60"
              height="60"
            />
          </li>

          <li className="flex gap-2">
            <a
              className="flex items-center gap-2 dark:hover:text-slate-300 transition duration-300 ease-in-out"
              href="index.html"
            >
              <FontAwesomeIcon icon={faHome} className="coffee-icon" /> پیشخوان{" "}
            </a>
          </li>

          <li>
            <a
              className="flex items-center gap-2 dark:hover:text-slate-300 transition duration-300 ease-in-out"
              href="pages/comment.html"
            >
              <FontAwesomeIcon icon={faComments} />
              نظرات
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-2 dark:hover:text-slate-300 transition duration-300 ease-in-out"
              href="pages/questionList.html"
            >
              <FontAwesomeIcon icon={faCircleQuestion} />
              پرسش و پاسخ
            </a>
          </li>

          <li>
            <Dropdown items={dropdownItems1} menuText="علی" />
            <Dropdown items={dropdownItems2} menuText="ممد" />
            <Dropdown items={dropdownItems3} menuText="جاوید" />
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      {isMobileNavOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
          <ul className="h-screen flex flex-col gap-4 w-60 bg-white dark:bg-slate-800  px-6 py-8 ring-1 ring-slate-900/5 shadow-xl dark:text-white">
            <li className="mt-8  flex justify-center items-center gap-2  cursor-default">
              <p className=" text-xl ">دانشگاه آراد</p>
              <img
                alt="آراد برندینگ"
                className=""
                src="https://aradbranding.com/en/uploads/settings/16688039641546.png"
                width="60"
                height="60"
              />
            </li>

            <li className="flex gap-2">
              <a
                className="flex items-center gap-2 dark:hover:text-slate-300 transition duration-300 ease-in-out"
                href="index.html"
              >
                <FontAwesomeIcon icon={faHome} className="coffee-icon" />{" "}
                پیشخوان{" "}
              </a>
            </li>

            <li>
              <a
                className="flex items-center gap-2 dark:hover:text-slate-300 transition duration-300 ease-in-out"
                href="pages/comment.html"
              >
                <FontAwesomeIcon icon={faComments} />
                نظرات
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 dark:hover:text-slate-300 transition duration-300 ease-in-out"
                href="pages/questionList.html"
              >
                <FontAwesomeIcon icon={faCircleQuestion} />
                پرسش و پاسخ
              </a>
            </li>

            <li>
              <Dropdown items={dropdownItems1} menuText="علی" />
              <Dropdown items={dropdownItems2} menuText="ممد" />
              <Dropdown items={dropdownItems3} menuText="جاوید" />
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default StandNav;
