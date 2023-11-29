import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";
export const Context = createContext();

const CourseContext = ({ children }) => {
  useEffect(() => {
    fetchCourese();
  }, []);

  const url = `http://localhost:4000/posts`;

  const fetchCourese = async () => {
    const res = await axios.get(url);
    dispatch({ type: "FetchCourses", payload: res.data });
    return res;
  };

  const reducerFun = (state, action) => {
    let id;
    let notId;
    switch (action.type) {
      case "FetchCourses":
        return [...action.payload];

      case "Post":
        break;

      case "Update":
        id = state.filter((i) => i.id === action.payload);
        console.log("id is", id);

        notId = state.filter((i) => i.id !== action.payload);
        console.log("notId is", notId);
        return [...state];

      case "Delete":
        return state.filter((i) => i.id !== action.payload);

      default:
        break;
    }
  };

  const reducerFun1 = (state, action) => {
    switch (action.type) {
      case "loggedIn":
        return action.payload;

      case "notLoggedIn":
        return action.payload;

      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducerFun, []);
  const [state1, dispatch1] = useReducer(reducerFun1, false);
  console.log("state is", state);
  return (
    <Context.Provider value={{ state, dispatch, state1, dispatch1 }}>
      {children}
    </Context.Provider>
  );
};

export default CourseContext;
