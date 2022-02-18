
import * as actions from "../../actionTypes";

const initialState = {
  books: [],
  bookToBeEdited : {}
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_BOOKS:
      return {
        ...state,
        books: action.payload
      };
      case actions.SAVE_SINGLE_BOOK:
        console.log('action' , action.payload)
        return {
          ...state,
          books: [...state.books, action.payload]
        };
        case actions.GET_SINGLE_BOOK:
          // console.log('action' , action.payload)
          return {
            ...state,
            bookToBeEdited: action.payload
          };
          
    default:
      return state;
  }

}