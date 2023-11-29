import React, { useContext, useState } from "react";
import { Context } from "../../contexts/CourseContext";
import { useNavigate } from "react-router-dom";

const AdminCard = ({ value }) => {
  const { dispatch } = useContext(Context);
  const [expanded, setExpanded] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="relative">
      <div className=" 480px:flex-row flex flex-col justify-center gap-6 ">
        <div className="">
          <img
            src="https://www.freecodecamp.org/news/content/images/2021/06/javascriptfull.png"
            alt="image Error"
            className=" max-w-[230px] rounded-sm"
          />
        </div>
        <div className="flex max-w-[600px] flex-col gap-1 gap-y-2">
          <h1 className="  text-2xl font-medium uppercase text-gold">
            {value.title}
          </h1>
          <p
            onClick={() => setExpanded(!expanded)}
            className={` mt-1 cursor-pointer ${
              expanded ? "line-clamp-none" : "line-clamp-2"
            }`}
          >
            {value.description}
          </p>
          <div className=" flex space-x-4">
            <button
              // onClick={() => dispatch({ type: "Update", payload: value.id })}
              onClick={handleClick}
              className=" rounded-md bg-green px-4 py-1 capitalize"
            >
              edit
            </button>
            <button
              onClick={() => dispatch({ type: "Delete", payload: value.id })}
              className=" rounded-md bg-red-600 px-4 py-1 capitalize"
            >
              delete
            </button>
          </div>
        </div>
      </div>

      <div className="">hover</div>

      {/* <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 top-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 -translate-y-1/4 px-4 ">
          <div className=" w-screen max-w-md flex-auto overflow-hidden rounded-3xl border border-green bg-dark text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <Popover.Button className=" flex justify-end">
                <VscChromeClose className=" cursor-pointer stroke-red-600 stroke-0 text-4xl text-green transition-all duration-300 hover:text-red-500" />
              </Popover.Button>

              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold capitalize leading-9 tracking-tight  ">
                  update your course
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" method="POST">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium capitalize leading-6 "
                    >
                      title
                    </label>
                    <div className="mt-2">
                      <input
                        //   value={getEmail}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-dark  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                        //   onChange={(e) => setGetEmail(e.target.value)}
                      />
                    </div>
                  </div>

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
                        // value={description} // Uncomment this line if you want a controlled component
                        //   defaultValue={description} // Use defaultValue if you want an uncontrolled component
                        required
                        name="description"
                        id="description"
                        rows="4"
                        cols="50"
                        placeholder="Type your message here..."
                        className="block w-full rounded-md border-0 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                        //   onChange={handleChange} // Use this if you want a controlled component
                      />
                    </div>
                  </div>

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
        </Popover.Panel>
      </Transition> */}
    </div>
  );
};

export default AdminCard;
