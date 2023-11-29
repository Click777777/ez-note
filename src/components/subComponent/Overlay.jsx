import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../contexts/CourseContext";

const Overlay = () => {
  const { dispatch1 } = useContext(Context);
  const [getEmail, setGetEmail] = useState("coursebye2n@gmail.com");
  const [getPassword, setGetPassword] = useState("admin@123");
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchLoginData();
  }, []);

  const fetchLoginData = async () => {
    const res = await axios.get("http://localhost:4000/login");
    res.data.map((i) => setloginData(i));
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (getEmail === loginData.email && getPassword === loginData.password) {
      navigate("/admin");
      dispatch1({ type: "loggedIn", payload: true });
    } else {
      dispatch1({ type: "notLoggedIn", payload: false });
    }
  };

  return (
    <div className="xs:px-6 480px:px-16 flex items-center justify-center px-4 py-6">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold capitalize leading-9 tracking-tight  ">
            update your course
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submitForm} method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium capitalize leading-6 "
              >
                title
              </label>
              <div className="mt-2">
                <input
                  value={getEmail}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-dark  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setGetEmail(e.target.value)}
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
                  name="description"
                  id="description"
                  cols="50"
                  rows="4"
                  className="block w-full rounded-md border-0 py-1.5 text-dark  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
                {/* <input
                  value={getPassword}
                  id="password"
                  name="password"
                  type="text"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-dark  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setGetPassword(e.target.value)}
                /> */}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
