type ButtonProps = {
  title: string;
};

export const Button = ({ title }: ButtonProps) => {
  return (
    <button className="bg-evergreen-light px-3 py-2 rounded-lg shadow text-whiteish font-medium">
      {title}
    </button>
  );
};
