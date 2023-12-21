const Footer = () => {
  return (
    <footer className="shadow-inner dark:shadow-slate-900  shadow-sky-300 dark:bg-slate-800 sm:pr-52 flex justify-around items-start w-full grid-flow-col place-items-end gap-x-4 gap-y-10 text-sm p-10 ">
      <nav className="flex  flex-col justify-start items-start gap-5">
        <header className="cursor-default font-semibold text-lg text-slate-500">
          خدمات
        </header>
        <a className="cursor-pointer no-underline dark:text-slate-300 dark:hover:text-gray-400 outline-transparent outline-offset-2">
          برندینگ
        </a>
        <a className="cursor-pointer no-underline dark:text-slate-300 dark:hover:text-gray-400 outline-transparent outline-offset-2">
          طراحی
        </a>
        <a className="cursor-pointer no-underline dark:text-slate-300 dark:hover:text-gray-400 outline-transparent outline-offset-2">
          بازار یابی
        </a>
        <a className="cursor-pointer no-underline dark:text-slate-300 dark:hover:text-gray-400 outline-transparent outline-offset-2">
          تبلیغات
        </a>
      </nav>
      <nav className="flex  flex-col justify-start items-start gap-5">
        <header className="cursor-default font-semibold text-lg text-slate-500">
          کمپانی
        </header>
        <a className="cursor-pointer no-underline dark:text-slate-300 dark:hover:text-gray-400 outline-transparent outline-offset-2">
          درباره ما
        </a>
        <a className="cursor-pointer no-underline dark:text-slate-300 dark:hover:text-gray-400 outline-transparent outline-offset-2">
          ارتباط با ما
        </a>
        <a className="cursor-pointer no-underline dark:text-slate-300 dark:hover:text-gray-400 outline-transparent outline-offset-2">
          مشاغل
        </a>
        <a className="cursor-pointer no-underline dark:text-slate-300 dark:hover:text-gray-400 outline-transparent outline-offset-2">
          مطبوعات
        </a>
      </nav>
      <nav className="flex  flex-col justify-start items-start gap-5">
        <header className="cursor-default font-semibold text-lg text-slate-500">
          قوانین
        </header>
        <a className="cursor-pointer no-underline dark:text-slate-300 dark:hover:text-gray-400 outline-transparent outline-offset-2">
          قوانین کاربری
        </a>
        <a className="cursor-pointer no-underline dark:text-slate-300 dark:hover:text-gray-400 outline-transparent outline-offset-2">
          حفظ حریم خصوصی
        </a>
        <a className="cursor-pointer no-underline dark:text-slate-300 dark:hover:text-gray-400 outline-transparent outline-offset-2">
          حفظ اطلاعات کاربر
        </a>
      </nav>
    </footer>
  );
};
export default Footer;
