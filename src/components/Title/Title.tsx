type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <h6 className="text-5xl border-b-evergreen-light border-b-4 w-fit font-bold text-evergreen">
      {title}
    </h6>
  );
};
