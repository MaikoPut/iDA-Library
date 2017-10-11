import { Book } from '../../models/book.model';

import * as BookActions from '../actions/book.actions';

export interface State {
    loading: boolean;
    results: Book[];
    selectedBook: Book;
}

const initialState: State = {
    loading: false,
    results: [],
    selectedBook: null,
}

export function bookReducer(state: State = initialState, action: BookActions.Actions): State {
    switch (action.type) {
        case BookActions.FETCH_ALL_BOOKS: {
            return {
                ...state,
                loading: true
            };
        }
        case BookActions.FETCH_ALL_BOOKS_DONE: {
            return {
                ...state,
                loading: false,
                results: action.payload
            };
        }
        case BookActions.GET_BOOK: {
            return {
                ...state,
                loading: false,
                selectedBook: state.results.filter(book => book.id === action.payload)[0]
            };
        }
        case BookActions.GET_BOOK_W_QR: {
            return {
                ...state,
                loading: true
            };
        }
        case BookActions.GET_BOOK_W_QR_DONE: {
            return {
                ...state,
                loading: false,
                selectedBook: state.results.filter(book => book.id === action.payload.id)[0]
            };
        }

        case BookActions.LOAN_BOOK: {
            return {
                ...state,
                loading: true,
            };
        }
        case BookActions.LOAN_BOOK_DONE: {
            return {
                ...state,
                loading: false,
            };
        }
        case BookActions.BRING_BACK: {
            return {
                ...state,
                loading: true
            };
        }
        case BookActions.BRING_BACK_DONE: {
            return {
                ...state,
                loading: false
            };
        }
        case BookActions.ADD_BOOK: {
            return {
                ...state,
                loading: true
            };
        }
        case BookActions.ADD_BOOK_DONE: {
            return {
                ...state,
                loading: false,
                results: [...state.results, action.payload]
            };
        }
        case BookActions.UPDATE_BOOK: {
            return {
                ...state,
                loading: true
            };
        }
        case BookActions.UPDATE_BOOK_DONE: {
            return {
                ...state,
                loading: false
            };
        }
        default: {
            return state;
        }
    }
}
