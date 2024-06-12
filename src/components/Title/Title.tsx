import classNames from "classnames";

type TitleProps = {
  title: string;
  className?: string;
};

export const Title = ({ title, className = "" }: TitleProps) => {
  return (
    <h6
      className={classNames(
        "md:text-5xl text-2xl border-b-evergreen-light border-b-4 w-fit font-bold text-evergreen",
        className
      )}
    >
      {title}
    </h6>
  );
};
