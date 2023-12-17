import Dropdown from "./dropDown";
import {
  faHome,
  faComments,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StandNav = () => {
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
      <ul className=" h-screen flex flex-col gap-4 w-56 bg-white dark:bg-slate-800  px-6 py-8 ring-1 ring-slate-900/5 shadow-xl dark:text-white">
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
    </>
  );
};

export default StandNav;
