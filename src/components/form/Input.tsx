import React from "react";
import classnames from "classnames";
const sizes = {
  small: "20px",
  medium: "30px",
  large: "55px",
};

type inputprops = {
  size?: "small" | "medium" | "large";
  name?: string;
  className?: string;
  style?: React.CSSProperties;
};
const Input = ({
  size = "medium",
  name,
  className,
  style,
  ...rest
}: inputprops & Omit<React.HTMLProps<HTMLInputElement>, "size" | "style">) => {
  const inputClassName = classnames(className, "font-inter");
  return (
    <input
      {...rest}
      id={name}
      name={name}
      style={{ height: sizes[size], ...style }}
      className={inputClassName}
    />
  );
};

const Password = ({
  size = "medium",
  name,
  required = false,
  style,
  className,
  ...rest
}: inputprops & Omit<React.HTMLProps<HTMLInputElement>, "size" | "style">) => {
  const inputClassName = classnames(className, "font-inter");
  return (
    <input
      {...rest}
      id={name}
      type="password"
      name={name}
      required={required}
      style={{ height: sizes[size], ...style }}
      className={inputClassName}
    />
  );
};

const Textarea = ({
  size,
  name,
  required = false,
  style,
  className,
  ...rest
}: inputprops &
  Omit<React.HTMLProps<HTMLTextAreaElement>, "size" | "style">) => {
  const inputClassName = classnames(className, "font-inter");
  return (
    <textarea
      {...rest}
      id={name}
      name={name}
      required={required}
      className={inputClassName}
    />
  );
};

const Checkbox = ({
  size,
  name,
  required = false,
  style,
  className,
  ...rest
}: inputprops & Omit<React.HTMLProps<HTMLInputElement>, "size" | "style">) => {
  return (
    <input
      {...rest}
      type="checkbox"
      id={name}
      name={name}
      required={required}
      className={className}
    />
  );
};

Input.Password = Password;
Input.Textarea = Textarea;
Input.Checkbox = Checkbox;

export default Input;
