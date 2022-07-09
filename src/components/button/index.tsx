import React from "react";
import Icons from "../Icons";

type buttonProps = {
  icon?: string;
  className?: string;
  style?: React.CSSProperties;
  text?: string;
  children?: React.ReactNode;
  loading?: boolean;
  iconPosition?: "left" | "right";
  type?: "primary" | "default" | "secondary" | "link";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function Button({
  icon,
  text,
  children,
  iconPosition = "left",
  type = "default",
  className,
  style,
  loading = false,
  onClick = () => null,
  ...rest
}: buttonProps & React.HTMLProps<HTMLButtonElement>) {
  const styleIconPosition = `${
    iconPosition === "left" ? "order-1" : "order-2"
  }`;

  const styleTextPosition = `${
    iconPosition === "left" ? "order-2" : "order-1"
  }`;

  const btnTypes = {
    primary: "btn-primary",
    default: "btn-default",
    secondary: "btn-secondary",
    link: "btn-link",
  };
  return (
    <button
      {...rest}
      style={style}
      onClick={onClick}
      className={`btn ${btnTypes[type]} ${className}`}
    >
      {!loading && (
        <span className={styleIconPosition}>{icon && Icons[icon]}</span>
      )}
      {loading && <span className="self-center block">{Icons["loader"]}</span>}
      {text ||
        (children && (
          <span className={styleTextPosition}>{text ? text : children}</span>
        ))}
    </button>
  );
}

export default Button;
