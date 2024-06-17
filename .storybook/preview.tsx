import "../src/assets/fonts/PlusJakarta/index.css";
import "../src/index.css";
import React from "react";
import type { Preview } from "@storybook/react";
import { BooksContext } from "../src/contexts/BooksContext";

const MockBooksProvider = ({ children }: { children: React.ReactNode }) => {
  const books = [
    {
      _id: "123",
      thumbnailUrl:
        "https://m.media-amazon.com/images/I/715viYQgzRL._SY466_.jpg",
      title: "Codigo Limpo",
      authors: ["Luke Skywalker"],
      categories: ["Codigo Limpo"],
      shortDescription: `Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit. Cras at magna est. Ut viverra metus nibh. Integer sit
      amet purus gravida justo interdum mattis quis quis justo. Vivamus nec
      tristique metus, vitae ultricies est. Aliquam dapibus id augue nec
      sodales.`,
      longDescription: `Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit. Cras at magna est. Ut viverra metus nibh. Integer sit
      amet purus gravida justo interdum mattis quis quis justo. Vivamus nec
      tristique metus, vitae ultricies est. Aliquam dapibus id augue nec
      sodales.`,
      status: "published",
      score: 1,
    },
  ];

  const handleSetBooks = () => console.log("handleSetBooks called");

  return (
    <BooksContext.Provider value={{ books, handleSetBooks }}>
      {children}
    </BooksContext.Provider>
  );
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <MockBooksProvider>
        <Story />
      </MockBooksProvider>
    ),
  ],
};

export default preview;
