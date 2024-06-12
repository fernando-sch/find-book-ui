import classNames from "classnames";
import { useCallback } from "react";

type TagProps = {
  title: string;
  className?: string;
};

export const Tag = ({ title, className = "" }: TagProps) => {
  const randomColors = useCallback((): {
    lightness: string;
    darkness: string;
  } => {
    const rnum = Math.floor(Math.random() * 360);
    const lightness = `hsl(${rnum}, 100%, 95%)`;
    const darkness = `hsl(${rnum}, 100%, 20%)`;

    return { lightness, darkness };
  }, []);

  return (
    <p
      style={{
        backgroundColor: randomColors().lightness,
        color: randomColors().darkness,
      }}
      className={classNames(
        "rounded-full bg-opacity-5 text-center w-fit px-3 py-1",
        className
      )}
    >
      {title}
    </p>
  );
};
