import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux";
import {updateBook} from "../redux/actions/books";
import {useNavigate} from 'react-router-dom'



export default function EditBook() {
    const bookToBeEdited = useSelector((state) => state.books.bookToBeEdited);
    const [editBookItem , setBookItem] = useState({title: '' , description: ''})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        setBookItem(bookToBeEdited)
      }, []);
    
      const handleSubmit  = (e) => {
          e.preventDefault()
          console.log("editBookItem" , editBookItem)
          dispatch(updateBook(editBookItem , navigate))
          setBookItem({title: '' , description: ''})
      }

      const handleChange = (e) => {
        setBookItem({
            ...editBookItem , [e.target.name] : e.target.value
        })
      }
  return (
    <div>EditBook
    <form onSubmit={(e) => handleSubmit(e)}>
        <input name="description" onChange={(e) => handleChange(e)} value={editBookItem.description}/>
        <input name="title" onChange={(e) => handleChange(e)} value={editBookItem.title} />
        <input type="submit" />
    </form>
    </div>
  )
}
