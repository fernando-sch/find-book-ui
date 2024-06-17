import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { Container } from "../../components/Container/Container";
import { HeaderTitle } from "../../components/Header/HeaderTitle";
import { Title } from "../../components/Title/Title";
import { Book, BooksContext } from "../../contexts/BooksContext";

export const BookDetails = () => {
  const [book, setBook] = useState<Book | null>(null);
  const { id } = useParams();
  const { books } = useContext(BooksContext);

  useEffect(() => {
    const findBook = books.find((book) => book._id === id) ?? null;
    setBook(findBook);
  }, [id, books]);

  return (
    <Container>
      <HeaderTitle />
      <div className="gap-4 grid md:grid-cols-2 grid-cols-1 mt-16">
        <div>
          <h2 className="text-5xl font-bold text-evergreen">{book?.title}</h2>
          <p className="text-xl text-gray-500 font-light py-4">
            {book?.authors.join(", ")}
          </p>
          <p className="text-gray-500 mt-6">
            {book?.longDescription
              ? book?.longDescription
              : "Livro não possui uma descrição."}
          </p>
        </div>
        <div>
          <img src={book?.thumbnailUrl} alt="" className="w-full rounded-lg" />
        </div>
      </div>
      <div>
        <Title title="Recomendações com base nesse livro" className="my-6" />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {books.map((book) => (
            <Card
              key={book._id}
              id={book._id}
              title={book.title}
              authors={book.authors}
              categories={book.categories}
              shortDescription={book.shortDescription}
              thumbnailUrl={book.thumbnailUrl}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
