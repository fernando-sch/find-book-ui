import { useCallback, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
import { Card } from "../../components/Card/Card";
import { Input } from "../../components/Input/Input";

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
          <Input placeholder={"Eu gostaria de ler..."} />
        </div>
        <Title title="Livros recomendados" className="my-5" />
        <Card bookId="1" />
      </Container>
    </section>
  );
};
