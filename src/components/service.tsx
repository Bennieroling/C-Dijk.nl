import cx from "classnames";
import { PropsWithChildren } from "react";

interface ISingleServiceProps {
  side: "left" | "right";
  title?: string;
  description?: string;
  imageUrl?: string;
}

const SingleService = ({ side, title, description, children,imageUrl }: PropsWithChildren<ISingleServiceProps>) => {
  return (
    <div
      className={cx("relative flex w-full flex-col p-4", {
        "md:flex-row": side === "left",
        "md:flex-row-reverse": side === "right",
      })}
    >
      <img className="w-1/2 rounded-3xl" src={imageUrl || "https://picsum.photos/1000/1000?grayscale"} alt="decoration" />
      <div
        className={cx("absolute flex w-full md:w-7/12", {
          "top-1/2 -translate-y-1/2 md:right-0 ": side === "left",
          "top-1/2 -translate-y-1/2 justify-end md:left-0": side === "right",
        })}
      >
        <div className="glass flex max-w-sm flex-col gap-2 p-4 text-gray-800">
          {!children && (
            <>
              <h3 className="color-effect text-3xl font-semibold">{title}</h3>
              <p className="text-lg">{description || children}</p>
            </>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default SingleService;
