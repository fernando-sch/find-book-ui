import { useCallback } from "react";
import { Button } from "../Button/Button";
import { Tag } from "../Tag/Tag";
import { useNavigate } from "react-router-dom";

type CardProps = {
  id: string;
  title: string;
  authors: string[];
  categories: string[];
  shortDescription: string | null;
  thumbnailUrl: string;
};

export const Card = ({
  id,
  title,
  thumbnailUrl,
  shortDescription,
  authors,
  categories,
}: CardProps) => {
  const navigate = useNavigate();

  const handleBookDetails = useCallback(() => {
    navigate(`/${id}`);
  }, [id, navigate]);

  return (
    <div className="p-4 grid grid-cols-3 gap-3 shadow-lg rounded-lg border border-gray-100 max-w-lg w-full">
      <img
        src={thumbnailUrl}
        alt=""
        className="col-span-1 w-full h-full rounded-lg"
      />
      <div className="col-span-2">
        <p className="font-bold text-2xl text-evergreen">{title}</p>
        <p className="font-light text-lg text-gray-500 mb-5">{authors[0]}</p>
        <Tag title={categories[0]} className="mb-3" />
        <p>
          <strong>Sinopse: </strong>
          {shortDescription
            ? shortDescription
            : "Livro não possui uma sinopse."}
        </p>
        <Button
          title="Ver mais"
          variant="light"
          onClick={() => handleBookDetails()}
          className="mt-3 w-1/2"
        />
      </div>
    </div>
  );
};
