import { FC, ReactElement, ReactNode } from "react";
interface Params {
  type?: "link" | "button";
  style?: "primary" | "secondary";
  href?: string;
  children?: ReactNode;
  className?: string;
}
const Button: FC<Params> = ({ type, style, href, children, className }) => {
  return (
    <>
      {type == "button" ? (
        <button className={`btn btn-${style} ${className}`}>{children}</button>
      ) : (
        <a href={href} className={`btn btn-${style} ${className}`}>
          {children}
        </a>
      )}
    </>
  );
};

Button.defaultProps = {
  type: "link",
  style: "primary",
  href: "/subscribe",
  children: <></>,
  className: "",
};

export default Button;
