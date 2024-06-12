import { Button } from "../Button/Button";
import { Tag } from "../Tag/Tag";

export const Card = () => {
  return (
    <div className="p-4 grid grid-cols-3 gap-3 shadow-lg rounded-lg border border-gray-100 max-w-lg w-full">
      <img
        src="https://m.media-amazon.com/images/I/715viYQgzRL._SY466_.jpg"
        alt=""
        className="col-span-1 w-full h-full rounded-lg"
      />
      <div className="col-span-2">
        <p className="font-bold text-2xl text-evergreen">Codigo Limpo</p>
        <p className="font-light text-lg text-gray-500 mb-5">Autor</p>
        <Tag title="Computer Engineering" className="mb-3" />
        <p>
          <strong>Sinopse:</strong> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Cras at magna est. Ut viverra metus nibh. Integer sit
          amet purus gravida justo interdum mattis quis quis justo. Vivamus nec
          tristique metus, vitae ultricies est. Aliquam dapibus id augue nec
          sodales.
        </p>
        <Button
          title="Ver mais"
          variant="light"
          onClick={() => console.log("book card")}
          className="mt-3 w-1/2"
        />
      </div>
    </div>
  );
};
