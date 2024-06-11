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
        <div className="mt-10 gap-8 grid grid-cols-8">
          {genreBooks.map((genre, index) => (
            <Button
              key={index}
              title={genre}
              onClick={() => handleSelect(genre)}
              variant={genresSelected.includes(genre) ? "dark" : "light"}
            />
          ))}
        </div>
      </Container>
    </>
  );
};
