import { useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { Container } from "../../components/Container/Container";
import { HeaderTitle } from "../../components/Header/HeaderTitle";
import { Title } from "../../components/Title/Title";

export const BookDetails = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <Container>
      <HeaderTitle />
      <div className="gap-4 grid md:grid-cols-2 grid-cols-1 mt-16">
        <div>
          <h2 className="text-5xl font-bold text-evergreen">Nome do livro</h2>
          <p className="text-xl text-gray-500 font-light py-4">Autor</p>
          <p className="text-gray-500 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            bibendum, urna vel ultricies maximus, lectus turpis mattis magna,
            nec cursus nisl nibh eget odio. Maecenas egestas luctus nibh, ut
            fringilla urna semper at. In accumsan vel augue non dapibus.
            Maecenas interdum est mollis, laoreet nisi eget, finibus tortor.
            Aliquam sagittis, purus vel bibendum tincidunt, metus est gravida
            diam, a dapibus felis augue nec tortor. Etiam in elementum est.
            Etiam congue nisl at ipsum fermentum, vitae ultricies turpis porta.
            Sed ut erat mattis ipsum accumsan lacinia porta non velit.{" "}
          </p>
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/715viYQgzRL._SY466_.jpg"
            alt=""
            className="w-full rounded-lg"
          />
        </div>
      </div>
      <div>
        <Title title="Recomendações com base nesse livro" className="my-6" />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          <Card bookId="1" />
          <Card bookId="2" />
        </div>
      </div>
    </Container>
  );
};
