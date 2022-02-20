import React from "react";

interface IForm {
  children: any
  onSubmit: () => void
}

export const FormComponent: React.FC<IForm> = ({children, ...props}) => {
  return (
    <form {...props} className='body__form' noValidate>
      {children}
    </form>
  );
};