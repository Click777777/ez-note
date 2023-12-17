import React, { createContext, useEffect, useReducer } from "react";
import { getAll } from "../api/RestApi";
export const Context = createContext();

const CourseContext = ({ children }) => {
  useEffect(() => {
    fetchCourese();
  }, []);

  const fetchCourese = async () => {
    const resData = await getAll();
    dispatch({ type: "FetchCourses", payload: resData });
  };

  const reducerFun = (state, action) => {
    let notId;
    switch (action.type) {
      case "FetchCourses":
        return [...action.payload];

      case "Post":
        return [...state, action.payload];

      case "Update":
        notId = state.filter((i) => i.id !== action.payload.id);
        return [...notId, action.payload].sort(function (a, b) {
          return a.id - b.id;
        });

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
  // console.log(state);
  return (
    <Context.Provider value={{ state, dispatch, state1, dispatch1 }}>
      {children}
    </Context.Provider>
  );
};

export default CourseContext;
