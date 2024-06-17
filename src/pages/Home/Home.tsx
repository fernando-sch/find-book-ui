import React, { useCallback, useContext, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
import { Card } from "../../components/Card/Card";
import { Input } from "../../components/Input/Input";
import { searchBook } from "../../services/Books";
import { BooksContext } from "../../contexts/BooksContext";

const genreBooks = [
  "Ação",
  "Aventura",
  "Biografia",
  "Comédia",
  "Drama",
  "Ficção",
];

export const Home = () => {
  const [genresSelected, setGenresSelected] = useState<string[]>([]);
  const { books, handleSetBooks } = useContext(BooksContext);

  const handleSelect = useCallback(
    (genre: string) => {
      if (genresSelected.includes(genre)) {
        setGenresSelected(
          genresSelected.filter((bookGenre) => bookGenre !== genre)
        );

        setGenresSelected([...genresSelected, genre]);
      }
    },
    [genresSelected]
  );

  const handleSubmit = useCallback(
    async (value: string) => {
      const response = await searchBook(value);
      handleSetBooks(response);
    },
    [handleSetBooks]
  );

  return (
    <section className="mb-6">
      <Header />
      <Container>
        <Title title="O que você quer ler hoje?" />
        <div className="my-10 gap-8 grid lg:grid-cols-6 grid-cols-4">
          {genreBooks.map((genre, index) => (
            <Button
              key={index}
              title={genre}
              onClick={() => handleSelect(genre)}
              variant={genresSelected.includes(genre) ? "dark" : "light"}
            />
          ))}
        </div>
        <div className="mt-1">
          <p className="text-evergreen font-semibold text-2xl">
            Sobre o que você gostaria de receber uma recomendação de livro?
          </p>
          <Input
            placeholder={"Eu gostaria de ler..."}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                handleSubmit(e.target.value);
              }
            }}
          />
        </div>
        <Title title="Livros recomendados" className="my-5" />
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
      </Container>
    </section>
  );
};
