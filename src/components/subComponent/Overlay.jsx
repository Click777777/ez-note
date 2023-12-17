import React, { useContext, useState } from "react";
import { GoX } from "react-icons/go";
import { Context } from "../../contexts/CourseContext";
import { updateCourse } from "../../api/RestApi";

const Overlay = ({ value, setClicked, clicked }) => {
  const { dispatch } = useContext(Context);
  const [updateData, setUpdateData] = useState({
    id: value.id,
    title: value.title,
    description: value.description,
  });

  const closeUpdateBtn = () => {
    setClicked(!clicked);
  };

  const dbUpdate = async () => {
    await updateCourse(updateData.id, updateData);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch({ type: "Update", payload: updateData });
    dbUpdate();
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
          <button className=" p-4 pb-0 text-[3rem] " onClick={closeUpdateBtn}>
            <GoX className="transition-all duration-200 hover:text-green" />
          </button>
        </div>

        <div className=" mx-auto max-w-lg p-8 pt-0">
          <div className="">
            <h2 className="mt-10 text-center text-2xl font-bold capitalize leading-9 tracking-tight  ">
              update your course
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
                    defaultValue={value.title} // Use defaultValue if you want an uncontrolled component
                    id="title"
                    name="title"
                    type="text"
                    autoComplete="title"
                    required
                    placeholder="Type your title here..."
                    className="block w-full rounded-md border-0 py-1.5 text-dark  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                    onChange={(e) =>
                      setUpdateData({
                        ...updateData,
                        title: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* posterImg & video */}
              {/* <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium capitalize leading-6 "
                >
                  content
                </label>
                <div className="mt-2 flex flex-wrap">
                  <div className="flex-1">
                    <label
                      htmlFor="video"
                      className="block text-xs font-normal capitalize leading-6 "
                    >
                      poster
                    </label>
                    <input
                      type="file"
                      name="video"
                      id="video"
                      required
                      accept="image/*"
                      className="max-w-[200px]"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </div>

                  <div className="flex-1">
                    <label
                      htmlFor="video"
                      className="block text-xs font-normal capitalize leading-6 "
                    >
                      video
                    </label>
                    <input
                      type="file"
                      name="video"
                      id="video"
                      required
                      accept="video/*"
                      className="max-w-[200px]"
                      onChange={(e) => setGetVideo(e.target.files[0])}
                    />
                  </div>
                </div>

                <div className="mt-2 flex space-x-2">
                  {file && (
                    <div className="flex-1">
                      <img
                        src={URL.createObjectURL(file)}
                        alt="image error"
                        className=" w-[400px]"
                      />
                    </div>
                  )}

                  {getVideo && (
                    <div className="flex-1">
                      <video
                        controls
                        src={URL.createObjectURL(getVideo)}
                        type={getVideo.type}
                        preload="auto"
                      />
                    </div>
                  )}
                </div>
              </div> */}

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
                    defaultValue={value.description} // Use defaultValue if you want an uncontrolled component
                    required
                    name="description"
                    id="description"
                    rows="4"
                    cols="50"
                    placeholder="Type your description here..."
                    className="block w-full rounded-md border-0 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                    onChange={(e) =>
                      setUpdateData({
                        ...updateData,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* update */}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green px-3 py-1.5 text-sm font-semibold capitalize leading-6 text-white shadow-sm ring-offset-4 hover:bg-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                >
                  update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
