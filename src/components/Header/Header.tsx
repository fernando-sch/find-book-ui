import backgroundImage from "../../assets/img/background-img.jpg";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { HeaderTitle } from "./HeaderTitle";

export const Header = () => {
  return (
    <header
      className="bg-cover bg-no-repeat text-whiteish w-auto"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container>
        <HeaderTitle />
        <div className="mt-20">
          <p className="text-7xl font-bold">
            Encontre livros <br /> que sejam a sua cara!
          </p>
          <p className="mt-3 mb-5 text-evergreen-light text-xl">Lorem Ipsum</p>
          <Button title="Pesquisar livros"/>
        </div>
      </Container>
    </header>
  );
};
