import backgroundImage from "../../assets/img/background-img.jpg";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { HeaderTitle } from "./HeaderTitle";

export const Header = () => {
  return (
    <header
      className="bg-cover bg-no-repeat bg-fixed text-whiteish w-auto"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container>
        <HeaderTitle />
        <div className="mt-20">
          <p className="md:text-7xl text-3xl font-bold">
            Encontre livros <br /> que sejam a sua cara!
          </p>
          <p className="mt-3 mb-5 text-evergreen-light text-xl">Lorem Ipsum</p>
          <Button title="Pesquisar livros" onClick={() => console.log("")} />
        </div>
      </Container>
    </header>
  );
};
