import { useCallback, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";

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

  return (
    <>
      <Header />
      <Container>
        <Title title="O que você quer ler hoje?" />
        <div className="my-10 gap-8 grid grid-cols-8">
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
          <input
            type="text"
            placeholder="Eu gostaria de ler..."
            className="outline-none shadow-lg border border-gray-100 rounded-lg w-full p-3"
          />
        </div>
        <Title title="Livros recomendados" />
      </Container>
    </>
  );
};
