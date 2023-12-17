import axios from "axios";

/**
 * Get All
 */
export const getAll = async () => {
  try {
    const res = await axios.get("http://localhost:4000/posts");
    return res.data;
  } catch (error) {
    return error;
  }
};

/**
 * Get One
 */
export const getOne = async (id) => {
  try {
    const res = await axios.get(`http://localhost:4000/posts/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

/**
 * Post
 */
export const postCourse = async (data) => {
  try {
    const res = await axios.post(`http://localhost:4000/posts`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

/**
 * Update
 */
export const updateCourse = async (id, data) => {
  try {
    const res = await axios.put(`http://localhost:4000/posts/${id}`, data);
    return res.data;
  } catch (error) {
    return error;
  }
};

/**
 * Delete
 */
export const deleteCourse = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:4000/posts/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
};
