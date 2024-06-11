import classNames from "classnames";

type ButtonProps = {
  title: string;
  onClick: () => void;
  variant?: "dark" | "light";
  className?: string;
};

export const Button = ({
  title,
  onClick,
  variant = "dark",
  className = "",
}: ButtonProps) => {
  return (
    <button
      className={classNames([
        "px-3 py-2 rounded-lg shadow font-medium",
        variant === "dark" && "bg-evergreen-light text-white",
        variant === "light" &&
          "bg-white border-2 border-evergreen-light text-evergreen-light",
        className,
      ])}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
