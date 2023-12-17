import React, { useContext, useEffect } from "react";
import AdminCard from "./subComponent/AdminCard";
import { Context } from "../contexts/CourseContext";

const Admin = () => {
  const { state } = useContext(Context);
  return (
    <div className="space-y-16 px-4 py-6 xs:px-6 480px:px-6 md:px-16">
      {state.map((i) => (
        <AdminCard key={i.id} value={i} />
      ))}
    </div>
  );
};

export default Admin;
