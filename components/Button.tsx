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
  onClick?: () => void;
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
  onClick,
}) => {
  return (
    <>
      {!type ? (
        tag == "button" ? (
          <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={`btn btn-${style} ${className}`}
          >
            {children}
          </button>
        ) : (
          tag == "link" && (
            <a
              href={href}
              onClick={onClick}
              className={`btn btn-${style} ${className}`}
            >
              {children}
            </a>
          )
        )
      ) : (
        <input
          disabled={disabled}
          onClick={onClick}
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
