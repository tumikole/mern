import axios from "axios";
import * as actions from "../actionTypes/index";

export const getBooks = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:4000/books");
      const books = response.data;
      dispatch({ type: actions.SAVE_BOOKS, payload: books });
    } catch (e) {
      console.log(e);
    }
  };
};

export const addBook = (book) => {
  return async (dispatch) => {
    const response = await axios.post("http://localhost:4000/books", book);
    const savedBook = response.data;
    dispatch({ type: actions.SAVE_SINGLE_BOOK, payload: savedBook });
  };
};

export const updateBook = (book , navigate) => {
  return async (dispatch) => {
    await axios.put(`http://localhost:4000/books/${book._id}`, book);
    dispatch({ type: actions.UPDATE_BOOK });
    navigate('/')
  };
};

export const getSingleBook = (id, navigate) => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:4000/books/${id}`);
    const savedBook = response.data;
    dispatch({ type: actions.GET_SINGLE_BOOK, payload: savedBook });
    navigate("/edit-book");
  };
};
