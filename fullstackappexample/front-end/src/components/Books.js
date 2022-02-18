import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, addBook ,getSingleBook} from "../redux/actions/books";
import {useNavigate} from 'react-router-dom'



function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const [book, setBook] = useState({ title: "", description: "" });
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(book);
    dispatch(addBook(book));
    dispatch(getBooks());
  };

  const editBook = (id) => {
      console.log("id id id" , id)
    dispatch(getSingleBook(id ,navigate))

  }

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  return (
    <div className="Books">
      {books.map((book) => (
        <ul>
          {" "}
          <li>
            {" "}
            title : {book.title} description : {book.description}
            <button onClick={() => editBook(book._id)}>edit </button>
          </li>{" "}
        </ul>
      ))}
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{ display: "grid", margin: "10rem 10rem" }}
      >
        <input
          type="text"
          placeholder="title"
          value={book.title}
          onChange={(e) => handleChange(e)}
          name="title"
        />
        <input
          type="text"
          placeholder="description"
          value={book.description}
          onChange={(e) => handleChange(e)}
          name="description"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Books;
