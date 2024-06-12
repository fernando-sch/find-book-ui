import { useCallback, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
import { Card } from "../../components/Card/Card";

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
          <input
            type="text"
            placeholder="Eu gostaria de ler..."
            className="outline-none shadow-lg border border-gray-100 rounded-lg w-full p-3"
          />
        </div>
        <Title title="Livros recomendados" className="my-5" />
        <Card />
      </Container>
    </section>
  );
};
