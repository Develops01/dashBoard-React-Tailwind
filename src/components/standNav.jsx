import Dropdown from "./dropDown";
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
    <div>
      <ul className="absolute sm:relative z-20 sm:pt-0 pt-14 mobile-menu hidden h-screen sm:h-full menu flex-nowrap sm:flex flex-col bg-base-200 md:w-56">
        <li>
          <a
            href="index.html"
            className="hidden sm:flex btn btn-ghost text-xl my-10"
          >
            دانشگاه آراد
            <img
              alt="آراد برندینگ"
              className="w-10 h-10"
              src="https://aradbranding.com/en/uploads/settings/16688039641546.png"
              width="60"
              height="60"
            />
          </a>
        </li>
        <li className="pt-5">
          <a href="index.html">
            <i className="fa-solid fa-home"></i> پیشخوان{" "}
          </a>
        </li>
        <li>
          <a href="pages/comment.html">
            <i className="fa-solid fa-comment"></i>
            نظرات
          </a>
        </li>
        <li>
          <a href="pages/questionList.html">
            <i className="fa-solid fa-question"></i>
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
  );
};

export default StandNav;
