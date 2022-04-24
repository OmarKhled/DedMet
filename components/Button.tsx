import { FC, ReactNode } from "react";
interface Params {
  tag?: "link" | "button" | "input";
  type?: "button" | "submit" | "reset" | undefined;
  style?: "primary" | "secondary";
  href?: string;
  children?: ReactNode;
  className?: string;
  value?: string;
  disabled?: boolean;
}
const Button: FC<Params> = ({
  tag,
  style,
  href,
  children,
  className,
  type,
  value,
  disabled,
}) => {
  return (
    <>
      {!type ? (
        tag == "button" ? (
          <button
            disabled={disabled}
            type={type}
            className={`btn btn-${style} ${className}`}
          >
            {children}
          </button>
        ) : (
          tag == "link" && (
            <a href={href} className={`btn btn-${style} ${className}`}>
              {children}
            </a>
          )
        )
      ) : (
        <input
          disabled={disabled}
          type={type}
          className={`btn btn-${style} ${className}`}
          value={value}
        />
      )}
    </>
  );
};

Button.defaultProps = {
  tag: "link",
  style: "primary",
  href: "/subscribe",
  children: <></>,
  className: "",
  disabled: false,
};

export default Button;
