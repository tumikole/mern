import axios from "axios";
import * as actions from "../actionTypes/index";

// const token = 

export const getBooks = () => {
  let token = localStorage.getItem('token');
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:4000/books" , {
        headers:{Authorization : token}
      });

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

export const deleteBook = (id , navigate) => {
  return async (dispatch) => {
    await axios.delete(`http://localhost:4000/books/${id}`);
    dispatch({ type: actions.DELETE_BOOK,
      payload: id
    });
    // navigate('/')
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
