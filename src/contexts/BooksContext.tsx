import React, { createContext, useState } from "react";

type Book = {
  _id: string;
  title: string;
  authors: string[];
  categories: string[];
  shortDescription: string;
  longDescription: string;
  status: string;
  thumbnailUrl: string;
  score: number;
};

type BooksContextProps = {
  books: Book[];
  handleSetBooks: (books: Book[]) => void;
};

export const BooksContext = createContext({} as BooksContextProps);

type BooksProviderProps = {
  children: React.ReactNode;
};

export const BooksProvider = ({ children }: BooksProviderProps) => {
  const [books, setBooks] = useState<Book[]>([]);

  const handleSetBooks = (books: Book[]) => {
    setBooks(books);
  };

  return (
    <BooksContext.Provider value={{ books, handleSetBooks }}>
      {children}
    </BooksContext.Provider>
  );
};
