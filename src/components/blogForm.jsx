import { useState } from "react";

const BlogForm = () => {
  const [selectedTags, setSelectedTags] = useState(new Set());
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
      const newSelectedTags2 = new Set(selectedTags);
      newSelectedTags2.add(tagInput);
      setSelectedTags(newSelectedTags2);

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
    <div className="overflow-x-auto lg:w-4/5 w-11/12 p-10 my-10 shadow-md rounded-lg h-fit flex flex-col">
      <p className="mb-5 border-b p-2 text-xl">افزودن بلاگ جدید</p>

      <div className="gap-2 items-center justify-start flex">
        <div className="dropdown mt-3">
          <div className="flex gap-3 flex-col justify-start items-start">
            <label htmlFor="tagSelector">یک دسته بندی انتخاب کن:</label>
            <select
              className="p-3 shadow bg-gray-800 rounded-box w-auto"
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
            <button className="btn btn-outline btn-md" onClick={addTag}>
              اضافه کردن دسته
            </button>
          </div>
        </div>

        <div className="tag-container flex flex-wrap" id="tagContainer">
          {/* Display selected tags */}
          {[...selectedTags].map((tag) => (
            <div
              key={tag}
              className="border rounded inline-block max-w-fit px-3 m-1 text-base break-words"
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
                X
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-around align-center mt-5 gap-2">
        <div className="w-1/2">
          <label htmlFor="test name">تیتر بلاگ :</label>
          <input
            name="test name"
            className="w-full border rounded px-3 py-2 mt-2"
            type="text"
            required
          />
        </div>

        <div className="w-1/2">
          <label htmlFor="video time">زمان مطالعه :</label>
          <input
            name="video time"
            className="w-full border rounded px-3 py-2 mt-2"
            type="text"
            required
          />
        </div>
      </div>

      <div className="flex flex-col justify-start items-start w-full mt-5">
        <label htmlFor="summary">خلاصه متن:</label>
        <textarea
          htmlFor="summary"
          placeholder="خلاصه متن"
          className="border rounded w-full px-3 py-2 mt-2"
        ></textarea>
      </div>

      <div className="flex justify-around align-center mt-5 gap-2">
        <div className="w-1/2">
          <label htmlFor="upload video">پیوند ویدیو :</label>
          <input
            name="upload video"
            className="border rounded w-full px-3 py-2 mt-2"
            type="file"
            required
          />
        </div>

        <div className="w-1/2">
          <label htmlFor="upload img">پیوند تصویر :</label>
          <input
            name="video img"
            className="border rounded w-full px-3 py-2 mt-2"
            type="file"
            required
          />
        </div>
      </div>

      <div className="w-full mt-5">
        <label htmlFor="namek">نامک :</label>
        <input
          name="namek"
          className="w-full border rounded px-3 py-2 mt-2"
          type="text"
          required
        />
      </div>

      <div className="flex flex-col justify-start items-start w-full mt-5">
        <label htmlFor="content">متن بلاگ:</label>
        <textarea
          htmlFor="content"
          placeholder=" متن بلاگ"
          className="border rounded w-full px-3 py-2 mt-2"
        ></textarea>
      </div>

      <div className="w-full mt-5 flex flex-col justify-center items-center">
        <div className="w-full flex justify-between items-center">
          <p className="text-xl">پرسش ها</p>
          <button className="btn btn-outline btn-md">افزودن پرسش</button>
        </div>

        <div className="w-full flex flex-col justify-center mt-5">
          <label htmlFor="question">متن پرسش :</label>
          <input
            name="question"
            className="w-full border rounded px-3 py-2 mt-2"
            type="text"
            required
          />

          <div className="w-full mt-5">
            <label htmlFor="myInput">افزودن برچسب :</label>
            <div className="relative w-full rounded-lg">
              <input
                className="border rounded w-full px-3 py-2 mt-2"
                placeholder="  ثبت با کلید ENTER"
                type="text"
                id="myInput"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyUp={(e) => {
                  if (e.keyCode === 13) {
                    addTag2();
                  }
                }}
              />
              <i className="fa fa-tags absolute top-1/2 left-3 -translate-y-1/2"></i>
            </div>
            <div className="tags">
              {tagList.map((tag, index) => (
                <span
                  key={index}
                  className="border rounded inline-block max-w-fit px-3 m-1 text-base break-words"
                >
                  # {tag}
                  <i
                    className="fa fa-solid fa-times cursor-pointer transition-all duration-1000 hover:bg-rose-600 rounded hover:text-red-200 m-1 py-1 text-rose-600 text-xl p-2"
                    onClick={() => deleteTag(index)}
                  ></i>
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-start mt-5 w-full">
            <button className="btn btn-outline btn-md">ذخیره</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
