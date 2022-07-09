import React, { ChangeEvent, createContext, useContext } from "react";

type formprops = {
  children: React.ReactNode;
  layout: "vertical" | "horizontal";
  onChangeValue?: (values: object) => void;
  onFinish: (values: object) => void;
};

export const Formcontext = createContext({ layout: "vertical" });
const Form = ({
  children,
  layout,
  onChangeValue = (e) => e,
  onFinish = (e) => e,
}: formprops) => {
  return (
    <div>
      <form
        onSubmit={(event: ChangeEvent<HTMLFormElement>) => {
          event.preventDefault();

          const inputs = new FormData(event.target);
          const values = Object.fromEntries(inputs);
          onFinish(values);
        }}
        onChange={(event: ChangeEvent<HTMLFormElement>) => {
          onChangeValue({ [event.target.name]: event.target.value });
        }}
      >
        <Formcontext.Provider value={{ layout }}>
          {React.Children.map(
            children,
            (
              child: React.ReactElement<
                any,
                string | React.JSXElementConstructor<any>
              >
            ) => React.cloneElement(child, { layout })
          )}
        </Formcontext.Provider>
      </form>
    </div>
  );
};

type Itemprops = {
  children: React.ReactNode;
  name?: string;
  label?: string;
  required?: boolean;
  className?: string;
};

const Item = ({ children, name, label, required, className }: Itemprops) => {
  const { layout } = useContext(Formcontext);
  return (
    <div
      className={className}
      style={{
        marginTop: 10,
        marginBottom: 10,
        display: "flex",
        flexDirection: `${layout === "vertical" ? "column" : "row"}`,
      }}
    >
      <label
        htmlFor={name}
        className=" font-inter  text-ev_input_lable text-base"
        style={{
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        {label}
      </label>
      {React.isValidElement(children)
        ? React.cloneElement(children as React.ReactElement<any>, {
            name,
            required,
          })
        : children}
    </div>
  );
};

Form.Item = Item;
export default Form;
