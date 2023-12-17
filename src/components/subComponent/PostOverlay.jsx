import React, { useContext, useState } from "react";
import { GoX } from "react-icons/go";
import { Context } from "../../contexts/CourseContext";
import { postCourse } from "../../api/RestApi";

const PostOverlay = ({ setClicked, clicked }) => {
  const { state, dispatch } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleEdit = (e) => {
    e.preventDefault();

    const postDataToServer = async () => {
      const res = await postCourse({
        title: title,
        description: description,
      });
    };
    postDataToServer();

    // Dispatch action to add the new post
    dispatch({
      type: "Post",
      payload: {
        id: state.length + 1,
        title: title,
        description: description,
      },
    });

    // Clear input values
    setTitle("");
    setDescription("");

    // Close the overlay
    setClicked(!clicked);
  };

  return (
    <div
      className={`${
        clicked ? "block" : "hidden"
      } fixed right-0 top-0 z-20 h-screen w-screen `}
    >
      <div className=" h-full overflow-auto border border-green bg-dark pb-12">
        <div className="flex justify-end">
          <button className=" p-4 pb-0 text-[3rem] " onClick={handleClick}>
            <GoX className="transition-all duration-200 hover:text-green" />
          </button>
        </div>

        <div className=" mx-auto max-w-lg p-8 pt-0">
          <div className="">
            <h2 className="mt-10 text-center text-2xl font-bold capitalize leading-9 tracking-tight  ">
              post a new course
            </h2>
          </div>

          <div className="mt-10 ">
            <form
              className="space-y-6"
              encType="multipart/form-data"
              onSubmit={handleEdit}
            >
              {/* title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium capitalize leading-6 "
                >
                  title
                </label>
                <div className="mt-2">
                  <input
                    id="title"
                    name="title"
                    type="text"
                    autoComplete="title"
                    required
                    placeholder="Type your title here..."
                    className="block w-full rounded-md border-0 py-1.5 text-dark  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>

              {/* description */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium capitalize leading-6 "
                  >
                    description
                  </label>
                </div>
                <div className="mt-2">
                  <textarea
                    required
                    name="description"
                    id="description"
                    rows="4"
                    cols="50"
                    placeholder="Type your description here..."
                    className="block w-full rounded-md border-0 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>

              {/* add */}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green px-3 py-1.5 text-sm font-semibold capitalize leading-6 text-white shadow-sm ring-offset-4 hover:bg-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                >
                  add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostOverlay;
