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

export const Dashboard = () => {
  return (
    <>
      <Header />
      <Container>
        <Title title="O que você quer ler hoje?" />
        <Container tailStyles="flex gap-10">
          {genreBooks.map((genre, index) => (
            <Button key={index} title={genre} />
          ))}
        </Container>
      </Container>
    </>
  );
};
