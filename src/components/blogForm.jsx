import { useState } from "react";
import { faTrash, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BlogForm = () => {
  const [selectedTags, setSelectedTags] = useState(new Set());
  const [selectedTags2, setSelectedTags2] = useState(new Set());
  const [tagInput, setTagInput] = useState("");
  const [tagList, setTagList] = useState([]);

  const addTag = () => {
    const tagSelector = document.getElementById("tagSelector");
    const selectedTag = tagSelector.value;

    if (selectedTag && !selectedTags.has(selectedTag)) {
      const newSelectedTags = new Set(selectedTags);
      newSelectedTags.add(selectedTag);
      setSelectedTags(newSelectedTags);
      tagSelector.options.namedItem(selectedTag).disabled = true;
    }
  };
  const addTag2 = () => {
    if (tagInput.trim() !== "") {
      const newSelectedTags2 = new Set(selectedTags2);
      newSelectedTags2.add(tagInput);
      setSelectedTags2(newSelectedTags2);

      const newTagList = [...tagList, tagInput];
      setTagList(newTagList);

      setTagInput("");
    } else {
      alert("لطفاً چیزی بنویسید");
    }
  };

  const deleteTag = (index) => {
    const newTagList = [...tagList];
    newTagList.splice(index, 1);
    setTagList(newTagList);

    const newSelectedTags = new Set(selectedTags);
    newSelectedTags.delete(tagList[index]);
    setSelectedTags(newSelectedTags);
  };

  return (
    <div className="  h-fit p-10 my-10 shadow-md shadow-sky-200 dark:bg-slate-700 dark:shadow-slate-900 rounded-lg  flex flex-col">
      <p className=" dark:text-white mb-5 border-b p-2 text-xl">
        افزودن بلاگ جدید
      </p>

      <div className=" gap-2 items-center justify-start flex">
        <div className="dropdown mt-3">
          <div className="dark:text-white flex gap-3 flex-col justify-start items-start">
            <label htmlFor="tagSelector">یک دسته بندی انتخاب کن:</label>
            <select
              className="bg-white dark:text-white border shadow-sky-200 dark:border-gray-800 dark:shadow-slate-800 dark:bg-slate-800  p-3 cursor-pointer shadow-md rounded-lg focus:outline-none  rounded-box w-auto"
              id="tagSelector"
            >
              <option value="" disabled selected>
                انتخاب دسته بندی
              </option>
              <option value="شرکت">شرکت</option>
              <option value="برندینگ">برندینگ</option>
              <option value="تجارت">تجارت</option>
              <option value="موبایل">موبایل</option>
              <option value="ادمین">ادمین</option>
              <option value="بازار">بازار</option>
            </select>
            <button
              className="dark:text-white border shadow-md shadow-sky-200 dark:border-gray-800 dark:shadow-slate-800 dark:bg-slate-800 rounded-md
              px-6 py-3"
              onClick={addTag}
            >
              اضافه کردن دسته
            </button>
          </div>
        </div>

        <div
          className="dark:text-white tag-container flex flex-wrap"
          id="tagContainer"
        >
          {/* Display selected tags */}
          {[...selectedTags].map((tag) => (
            <div
              key={tag}
              className="border dark:bg-slate-800 rounded inline-block max-w-fit px-4 py-1  m-1 text-base break-words"
            >
              {tag}
              <button
                onClick={() => {
                  const newSelectedTags = new Set(selectedTags);
                  newSelectedTags.delete(tag);
                  setSelectedTags(newSelectedTags);
                  tagSelector.options.namedItem(tag).disabled = false;
                }}
              >
                <FontAwesomeIcon
                  className=" mr-2 text-rose-600"
                  icon={faTrash}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex justify-around align-center mt-5 gap-2">
        <div className=" w-1/2">
          <label className="dark:text-white" htmlFor="blogLabel">
            تیتر بلاگ :
          </label>
          <input
            id="blogLabel"
            className="w-full border rounded px-3 py-2 mt-2"
            type="text"
            required
          />
        </div>

        <div className="w-1/2">
          <label className="dark:text-white" htmlFor="TimeToRead">
            زمان مطالعه :
          </label>
          <input
            id="TimeToRead"
            className="w-full border rounded px-3 py-2 mt-2"
            type="text"
            required
          />
        </div>
      </div>

      <div className=" flex flex-col justify-start items-start w-full mt-5">
        <label className="dark:text-white" htmlFor="summary">
          خلاصه متن:
        </label>
        <textarea
          id="summary"
          placeholder="خلاصه متن"
          className="border rounded w-full px-3 py-2 mt-2"
        ></textarea>
      </div>

      <div className="dark:text-white flex justify-around align-center mt-5 gap-2">
        <div className=" w-1/2">
          <label htmlFor="uploadVid">پیوند ویدیو :</label>
          <input
            id="uploadVid"
            className=" border rounded w-full px-3 py-2 mt-2"
            type="file"
            required
          />
        </div>

        <div className="w-1/2">
          <label htmlFor="uploadImg">پیوند تصویر :</label>
          <input
            id="uploadImg"
            className="border rounded w-full px-3 py-2 mt-2"
            type="file"
            required
          />
        </div>
      </div>

      <div className=" w-full mt-5">
        <label className="dark:text-white" htmlFor="naamak">
          نامک :
        </label>
        <input
          id="naamak"
          className="w-full border rounded px-3 py-2 mt-2"
          type="text"
          required
        />
      </div>

      <div className=" flex flex-col justify-start items-start w-full mt-5">
        <label className="dark:text-white" htmlFor="blogContent">
          متن بلاگ:
        </label>
        <textarea
          id="blogContent"
          placeholder=" متن بلاگ"
          className="border rounded w-full px-3 py-2 mt-2"
        ></textarea>
      </div>

      <div className="w-full mt-5 flex flex-col justify-center items-center">
        <div className="w-full flex justify-between items-center">
          <p className="dark:text-white text-xl">پرسش ها</p>
          <button
            className="dark:text-white border shadow-md shadow-sky-200 dark:border-gray-800 dark:shadow-slate-800 dark:bg-slate-800 rounded-md
             px-7 py-3"
          >
            افزودن پرسش
          </button>
        </div>

        <div className="w-full flex flex-col justify-center mt-5">
          <label className="dark:text-white" htmlFor="question">
            متن پرسش :
          </label>
          <input
            id="question"
            className="w-full border rounded px-3 py-2 mt-2"
            type="text"
            required
          />

          <div className="w-full mt-5">
            <label className="dark:text-white" htmlFor="addLabel">
              افزودن برچسب :
            </label>
            <div className="relative w-full rounded-lg">
              <input
                className="border rounded w-full px-3 py-2 mt-2"
                placeholder="  ثبت با کلید ENTER"
                type="text"
                id="addLabel"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyUp={(e) => {
                  if (e.keyCode === 13) {
                    addTag2();
                  }
                }}
              />
            </div>
            <div>
              {tagList.map((tag, index) => (
                <span
                  key={index}
                  className=" dark:bg-slate-800 dark:text-white border rounded inline-block max-w-fit px-3 py-1 m-1 text-base break-words"
                >
                  <FontAwesomeIcon
                    className="ml-1 text-amber-400"
                    icon={faTag}
                  />{" "}
                  {tag}
                  <FontAwesomeIcon
                    onClick={() => deleteTag(index)}
                    className=" mr-3 text-rose-600 cursor-pointer"
                    icon={faTrash}
                  />
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-start mt-5 w-full">
            <button
              className="dark:text-white border shadow-md shadow-sky-200 dark:border-gray-800 dark:shadow-slate-800 dark:bg-slate-800 rounded-md
             px-7 py-3"
            >
              ذخیره
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
